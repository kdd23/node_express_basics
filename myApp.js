let express = require('express');
let app = express();
const router = express.Router();

require('dotenv').config();

//2. Start a Working Express Server
console.log("Hello World");

//3. Serve an HTML File
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
})

//4. Serve Static Assets
app.use("/public", express.static(__dirname + '/public'));

// 5. Serve JSON on a Specific Route
// app.get("/json", function(req, res) {
//   res.json({
//     "message": "Hello json"
//   });
// });

//6. Use the .env File
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      "message": "HELLO JSON"
    });
  } else {
    res.json({
      "message": "Hello json"
    });
  }
});

//7. implement a root level request logger middleware
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//8. chain middleware to create a time server
app.get("/now", function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.send({
    time: req.time
  });
});

//9. Get Route Parameter Input from the Client
app.get("/:word/echo", function(req, res, next) {
  req.params.word = {echo: word};
  next()
})
module.exports = router;

