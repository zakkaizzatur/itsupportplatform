module.exports = app => {
    const laptops = require("../controllers/laptop.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", laptops.create);
    // Retrieve all Tutorials
    router.get("/", laptops.findAll);
    // Retrieve all published Tutorials
    router.get("/published", laptops.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", laptops.findOne);
    // Update a Tutorial with id
    router.put("/:id", laptops.update);
    // Delete a Tutorial with id
    router.delete("/:id", laptops.delete);
    // Create a new Tutorial
    router.delete("/", laptops.deleteAll);
    app.use('/api/laptops', router);
  };