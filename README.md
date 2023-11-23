# ScrolltoViewMoreList
Scroll to bottom to view more list.

To run Api from server using Express.


mkdir cors-server && cd cors-server 
You should now have an empty folder named cors-server. Let's initialize a new npm project inside it by running 

npm init -y 
You should now have a package.json file inside the project. Great! Let's install Express, a lightweight NodeJS framework for creating web applications. 

npm i express 
Next, create an app.js file inside the root directory and add the following code to it:


node app
If you point your browser to http://localhost:8080/, you should see something like this:


CORS enabled.

Notice that the CORS error goes away and that you get back the response along with some JSON data. Everything works as intended. Great! All you needed to do was to attach that CORS stamp on your response. Note that you may need to restart your back-end server to see the above changes in action. 

You can also set the Access-Control-Allow-Origin to specific domains instead of the asterisk. For instance, setting it to http://localhost:3000 will only enable CORS for clients that are running on the specified URL, localhost:3000.

app.get('/cors', (req, res) => {
res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
res.send({ "msg": "This has CORS enabled 🎈" })
})
While the server-side fix to CORS is the most technically coherent solution to this problem, there's a small catch. It requires you to make modifications on the server side. In some cases, you might not have access to server-side code.

For example, if you're using a third-party service for authentication, notification, sending emails, etc., you might run into this problem. In such cases, there isn't much you can do but shoot an email to the developers asking them to enable CORS for your app. There's a neat trick specific to React apps that you can use to work around this problem. Let's see how it works.

Proxy Requests in a React App
Have you ever tried to proxy your classmate during a lecture by shouting out to their roll call? That's how proxying works in API requests as well! You can tell your React app to proxy your requests to a server using the proxy property inside the package.json file. 

This is a simple one-step process. Go inside your app's package.json file and add the following property:

{
...
"proxy":"http://localhost:8080"
...
}
Now if you restart your React development server, you'll notice that all requests are being served to http://localhost:8080 instead of http://localhost:3000. You've proxied your React development server to your back-end server. The above works exactly the same way for third-party services as well. 

Under the hood, when your React app requests resources from http://localhost:8080, it pretends to be requesting this resource from the origin http://localhost:8080 instead of http://localhost:3000. This seems in line with browser's SOP, and you no longer get the CORS error.
Let's say you're using a service on https://randomservice.com and you come across the CORS error. You can add the URL inside the proxy property in your package.json file.

{
...
"proxy":"https://randomservice.com"
...
}
The development server will only attempt to send requests without text/html in its Accept header to the proxy.

For more details pls refer Express dev kit.
https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
