// Create node server
const http = require("http");

// fs module to manipulate files
const fs = require("fs");
// function create node server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  // call the json file function
  get_data();
  // successful transfer
  res.end("successful transfer");
});
// call the server
server.listen(4000, "localhost");

console.log("server created");

// DUnction to get data from API
function get_data() {
  // require fetch API
  const fetch = require("node-fetch");
  const url = "http://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((resp) => resp.json())
    // Get data and save to local variable
    .then((json) => {

      data = JSON.stringify(json, null, 2);
      // Write files to result/posts.json
      fs.writeFileSync("./result/posts.json", data);
     
      
    });
}
