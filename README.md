# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


To run Api from server using Express.

mkdir cors-server && cd cors-server You should now have an empty folder named cors-server. Let's initialize a new npm project inside it by running

npm init -y You should now have a package.json file inside the project. Great! Let's install Express, a lightweight NodeJS framework for creating web applications.

npm i express Next, create an app.js file inside the root directory and add the following code to it:

node app If you point your browser to http://localhost:8080/, you should see something like this:

CORS enabled.

Notice that the CORS error goes away and that you get back the response along with some JSON data. Everything works as intended. Great! All you needed to do was to attach that CORS stamp on your response. Note that you may need to restart your back-end server to see the above changes in action.

You can also set the Access-Control-Allow-Origin to specific domains instead of the asterisk. For instance, setting it to http://localhost:3000 will only enable CORS for clients that are running on the specified URL, localhost:3000.

app.get('/cors', (req, res) => { res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); res.send({ "msg": "This has CORS enabled 🎈" }) }) While the server-side fix to CORS is the most technically coherent solution to this problem, there's a small catch. It requires you to make modifications on the server side. In some cases, you might not have access to server-side code.

For example, if you're using a third-party service for authentication, notification, sending emails, etc., you might run into this problem. In such cases, there isn't much you can do but shoot an email to the developers asking them to enable CORS for your app. There's a neat trick specific to React apps that you can use to work around this problem. Let's see how it works.

Proxy Requests in a React App Have you ever tried to proxy your classmate during a lecture by shouting out to their roll call? That's how proxying works in API requests as well! You can tell your React app to proxy your requests to a server using the proxy property inside the package.json file.

This is a simple one-step process. Go inside your app's package.json file and add the following property:

{ ... "proxy":"http://localhost:8080" ... } Now if you restart your React development server, you'll notice that all requests are being served to http://localhost:8080 instead of http://localhost:3000. You've proxied your React development server to your back-end server. The above works exactly the same way for third-party services as well.

Under the hood, when your React app requests resources from http://localhost:8080, it pretends to be requesting this resource from the origin http://localhost:8080 instead of http://localhost:3000. This seems in line with browser's SOP, and you no longer get the CORS error. Let's say you're using a service on https://randomservice.com and you come across the CORS error. You can add the URL inside the proxy property in your package.json file.

{ ... "proxy":"https://randomservice.com" ... } The development server will only attempt to send requests without text/html in its Accept header to the proxy.

For more details pls refer Express dev kit. https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

