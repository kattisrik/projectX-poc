const express = require("express");
const server = express();
const cors = require("cors");
const body_parser = require("body-parser");
server.use(cors({ credentials: true }));

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = process.env.PORT || 4000;

// << db setup >>
const db = require("./db");
const dbName = "poc";
const collectionName = "details";

// << db init >>
db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    // successCallback
    // << db POST API >>
    server.post("/details", (request, response) => {
      const item = request.body;
      dbCollection.insertOne(item, (error, result) => {
        // callback of insertOne
        if (error) throw error;
        response.json("successfully inserted user");
      });
    });
    server.get("/details", function (req, res) {
      dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    });
    server.get("/details/:path", function (req, res) {
      dbCollection
        .find({ path: req.params.path })
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result[0]);
        });
    });
  },
  function (err) {
    // failureCallback
    throw err;
  }
);

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
