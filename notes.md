# Express Js

is a framework for building restful APIs with nodeJs.

## PORT environment variable

keep in mind to read the **PORT** environment variable in your app cause that is provided by the hosting computer otherwise your app might work on your machine but not when you host it on the server.

### Set env in windows

`$env:VarName="Value"` remember env will reset after killing the terminal or restarting your app.

## Route Parameter

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

**used for required data**

```js
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
```

` url in the browser >>> https://localhost:3000/api/courses/100`

here 100 is the id which will be captured by **:id** route-parameter

## Query String Parameters

A query string is a set of characters tacked onto the end of a URL. The query string begins after the question mark (?) and can include one or more parameters. Each parameter is represented by a unique key-value pair or a set of two linked data items. An equals sign (=) separates each key and value and each pair is separated with an (&) sign.

**used for optional data**

```js
app.get("/api/courses/:id", (req, res) => {
  res.send(req.query); // the object will be populated with key/value pairs specified in the url
  res.send(req.query.queryNameProvidedInBrowser);
});
```

` url in the browser >>> https://localhost:3000/api/courses/100/?name=CodeWithMosh`


## Posting data to server

posting data is usually done by using request body.

**by convention whenever you post an object to server and when server creates a new object/resource it should return that object in the body of response.**
