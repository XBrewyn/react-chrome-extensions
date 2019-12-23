# react-chrome-extensions

> A chrome extensions app with react

 ![npm package version](https://img.shields.io/badge/npm%20package->=10.16.3-green)
## We use

- [Node JS](https://github.com/nvm-sh/nvm)
- [React JS](https://reactjs.org/) 
- [Manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

## Installation

- Clone the repository and enter to the directory

   `git clone https://github.com/XBrewyn/react-chrome-extensions.git`
   
   `cd react-chrome-extensions` 
   
- Install dependencies

   `npm i`
   
 - Start the project

   `npm start`
   
 - Add extensions to chrome
    
     a) Open the Google Chrome and typing the URL in the address bar `chrome://extensions/` 
     
     b) Click on `load unpacked`
     
     c) Select the folder `build` inside the `react-chrome-extensions folder`
     
## Folder Structure

  ```bash
   react-chrome-extensions
   ├── chrome
   │   ├── icons
   │   │   ├── 16.png
   │   │   ├── 48.png
   │   │   └── 12.png
   │   └── manifest.json
   │
   ├── frontend    
   │   ├── components
   │   ├── containers
   │   ├── app.jsx
   │   ├── index.html
   │   └── index.jsx
   │
   ├── .babelrc.js
   ├── .eslintrc.js
   ├── .gitignore 
   ├── package-lock.json    
   ├── package.json
   ├── README.md
   └── webpack.config.js
   ```
   
