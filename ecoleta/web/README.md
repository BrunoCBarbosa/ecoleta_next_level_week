# WEB
The web application is created with React, to create a project using Typescript write in terminal `npx create-react-app web --template=typescript`, don't forget the `--template=typescript` to work with typescript.

## TIPS
if any import have problem because the @types, just write the command `npm install @types/"the import name" -D`, the `-D` is because you just have to use it in development ambient, when the project go to production, is converted to `Javascript`, so you don't have this type of problem.

## DEPENDENCES
- react-icons
- react-router-dom
- leaflet
- react-leaflet
- axios
- react-dropzone

## LEAFLET
Is an open source javascript library for mobile-friendly interactive map, to install it just write `npm install leaflet`. The official page is `https://leafletjs.com/`.

## REACT LEAFLET
With this you can integrate leaflet maps to react to install just write `npm install react-leaflet`. The official page is `https://react-leaflet.js.org/`.

## DROPZONE
With the dropzone you can drag'n'drop and upload some item, in your application.

The documentation link is `https://react-dropzone.js.org/`.