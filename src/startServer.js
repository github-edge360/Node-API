const express = require("express");
var router = express.Router();

const startServer = () => {
  console.log("Starting server...");
  const app = express();

  router.get("/", (req, res) => {
    res.json({
      name: "Steve",
      lastName: "Jobs New",
      isPresident: false
    });
  });

  router.get("/hello", (req, res) => {
    res.json({
      name: "Bill",
      lastName: "Gates New",
      isPresident: false
    });
  });

  app.use("/", router);

  return app;
};

module.exports = startServer;
