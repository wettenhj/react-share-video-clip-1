# react-share-video-clip

A React implementation of the "Share Video Clip" exercise.

This simple React app can be run with `npm install && npm start`, however you'll need a Pro subscription to Font Awesome to be able to load all of the icons: https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro

It is designed to be run locally, so it uses `local-cors-proxy` to avoid Cross Origin Resource Sharing (CORS) errors when accessing the list of Slack channels from the remote API.  In a real-life situation, this could be handled more elegantly, possibly by serving the API and the front-end from the same origin.

This exercise was time-boxed to one week in my spare time - there's a lot more I'd like to do if I had more time, including Unit Tests (Jest / Enzyme), documentation, and code style improvements.

The React components can be found in `src/components/`.  Some make use of established React components like `react-modal` and `react-select`, while other components use simple HTML elements together with Font Awesome icons and CSS provided in the specification for this exercise.

An attempt is made to follow the "Lifting State Up" philosophy (https://reactjs.org/docs/lifting-state-up.html), i.e. whilst it may seem logical to make the `selectedChannel` a state of the `SelectChannel` component (used within the `ShareVideoModal` component), the `selectedChannel` is needed by the ancestor of the `ShareVideoModal` component (which is called `ScreenContainer`), because the appropriate action to be performed after clicking the modal dialog's `Share with Slack` button depends on whether a Slack channel has been selected or not.  If a Slack channel has been selected, then the video clip can be posted to Slack and the React app can display a success notification.  If a Slack channel has not been selected, then the React app can display an error message, instructing the user to select a channel.


![Animated GIF](https://media.giphy.com/media/60rHlxrtHBSDZ2Mmy0/giphy.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
