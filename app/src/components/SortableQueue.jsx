import { createContext, useContext, useMemo, useState } from "react"
import { useFetcher } from "@remix-run/react"

import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import { css } from "@emotion/css"

import SortableQueueItem, { QueueItem } from "./SortableQueueItem"

const queueList = css`
  list-style-type: none;
  padding: 0 10px;
  margin: 0px;
`

const QueueDragContext = createContext({})

export default function SortableQueue({ queuedProjects, reorderProjects }) {
  const [activeId, setActiveId] = useState(null)
  const [queue, setQueue] = useState(queuedProjects)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )
  const fetcher = useFetcher()

  // This is a "derived variable" - we useMemo when it is expensive
  const activeProject = useMemo(
    () => activeId && queue.find((item) => item.id === activeId),
    [activeId, queue],
  )

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={queue} strategy={verticalListSortingStrategy}>
        <ul className={queueList}>
          {queue.map((project) => (
            <SortableQueueItem
              key={`queue-item-${project.id}`}
              project={project}
            />
          ))}
        </ul>
      </SortableContext>
      <DragOverlay>
        {activeProject ? <QueueItem project={activeProject} /> : null}
      </DragOverlay>
    </DndContext>
  )

  function handleDragStart(event) {
    const { active } = event

    setActiveId(active.id)
  }

  function handleDragEnd(event) {
    const { active, over } = event
    // console.log("drag end active:", active, "over:", over)
    if (active.id !== over.id) {
      let projectId, oldIndex, newIndex
      setQueue((items) => {
        projectId = queue.find((item) => item.id === active.id)?.id
        oldIndex = items.findIndex((item) => item.id === active.id)
        newIndex = items.findIndex((item) => item.id === over.id)

        console.log(
          `moving item from ${active.id}/${oldIndex} to ${over.id}/${newIndex}`,
        )

        return arrayMove(items, oldIndex, newIndex)
      })
      // form action to queue.jsx route, to make change on server
      fetcher.submit(
        {
          projectId,
          newPosition: newIndex,
        },
        {
          fetcherKey: "sort-queue",
          action: "/queue",
          method: "POST",
          encType: "application/json",
          navigate: false,
          replace: true,
          preventScrollReset: true,
        },
      )
    }
    setActiveId(null)
  }
}
