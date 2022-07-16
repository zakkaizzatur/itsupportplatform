const db = require("../models");
const Laptop = db.laptop;
const Op = db.Sequelize.Op;

// Create and Save a new Laptop
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Laptop
  const laptop = {
    type: req.body.type_id,
    brand: req.body.brand,
    series: req.body.series,
    processor_type: req.body.processor_type,
    processor_generation: req.body.processor_generation,
    ram_type: req.body.ram_type,
    ram_size: req.body.ram_size,
    storage_type: req.body.storage_type,
    storage_size: req.body.storage_size,
    graphics_type: req.body.graphics_type
  };

  // Save Laptop in the database
  Laptop.create(laptop)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Laptop."
      });
    });
};

// Retrieve all Laptops from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Laptop.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving laptops."
      });
    });
};

// Find a single Laptop with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Laptop.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Laptop with id=" + id
      });
    });
};

// Update a Laptop by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Laptop.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Laptop was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Laptop with id=${id}. Maybe Laptop was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Laptop with id=" + id
      });
    });
};

// Delete a Laptop with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Laptop.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Laptop was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Laptop with id=${id}. Maybe Laptop was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Laptop with id=" + id
      });
    });
};

// Delete all Laptops from the database.
exports.deleteAll = (req, res) => {
  Laptop.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Laptops were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all laptops."
      });
    });
};

// find all published Laptop
exports.findAllPublished = (req, res) => {
  Laptop.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving laptops."
      });
    });
};