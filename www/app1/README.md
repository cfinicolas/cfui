# Getting Started with Create React App

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the app directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

## Build, Deploy, and Preview

Build pipeline: https://jenkins04.cfdomains.com:8443/job/PDVPASS/

Deploy pipeline: https://jenkins04.cfdomains.com:8443/job/Deploy%20passwordgen/

Preview URL: https://d3tlqiwec0ml0t.cloudfront.net/

## Usage

### 1. Import JS and CSS build files.

```
<!-- Stylesheet -->
<link rel="stylesheet" href="https://d3tlqiwec0ml0t.cloudfront.net/static/css/main.css" />

<!-- Script -->
<script src="https://d3tlqiwec0ml0t.cloudfront.net/static/js/main.js"></script>

```

### 2. To render the widget, add the following markup to the desired location:

`<div id="so-passwordgen-app"></div>`
