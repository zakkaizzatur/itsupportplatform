module.exports = app => {
    const brands = require("../controllers/brand.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", brands.create);
    // Retrieve all Tutorials
    router.get("/", brands.findAll);
    // Retrieve all published Tutorials
    router.get("/published", brands.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", brands.findOne);
    // Update a Tutorial with id
    router.put("/:id", brands.update);
    // Delete a Tutorial with id
    router.delete("/:id", brands.delete);
    // Create a new Tutorial
    router.delete("/", brands.deleteAll);
    app.use('/api/brands', router);
  };