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

module.exports = router;
