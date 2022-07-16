module.exports = app => {
    const type = require("../controllers/type.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", type.create);
    // Retrieve all Tutorials
    router.get("/", type.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", type.findOne);
    // Update a Tutorial with id
    router.put("/:id", type.update);
    // Delete a Tutorial with id
    router.delete("/:id", type.delete);
    // Create a new Tutorial
    app.use('/api/types', router);
  };