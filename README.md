# knitnotebook

A tool to manage my knitting notebook on Ravelry.

## Complex React State Presentation

[Download the Presentation Here](UtahJS%202024%20-%20Complex%20State%20in%20React.pptx)

## Complex React State Demo Project

This project is also for demonstrating how to deal with complex React state! More documentation to come.

## Repo Setup Information

### Ravelry API key

To connect with Ravelry, you'll need to set up your own Ravelry API key: https://www.ravelry.com/api

### Running a secure localhost (https)

In order to properly connect with the Ravelry API locally, we need to run localhost in https.
I followed setup instructions here: https://medium.com/@dogukanakkaya/local-https-express-server-with-remix-framework-f7723c657066
... except I used these cert installation instructions: https://github.com/FiloSottile/mkcert

In your .env file, set: USE_LOCAL_HTTPS=true

### Using Material UI/Emotion in Remix:

https://github.com/mui/material-ui/blob/master/examples/material-ui-remix-ts/README.md
