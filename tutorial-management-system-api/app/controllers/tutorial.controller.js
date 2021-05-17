const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
      // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    }

  // Create a Tutorial
  const tutorial = new Tutorial({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Tutorial.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        else res.send(data);
      });
};

// Find a single Tutorial with a tutorialId
exports.findOne = (req, res) => {
    Tutorial.findById(req.params.tutorialId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.tutorialId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Tutorial with id " + req.params.tutorialId
            });
          }
        } else res.send(data);
      });
    
};



exports.search = (req, res) => {
  Tutorial.searchByTitle(req.params.searchKey, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with searchKey ${req.params.searchKey}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorials with searchKey " + req.params.searchKey
          });
        }
      } else res.send(data);
    });
  
};



// Update a Tutorial identified by the tutorialId in the request
exports.update = (req, res) => {
      // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Tutorial.updateById(
    req.params.tutorialId,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.tutorialId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.tutorialId
          });
        }
      } else res.send(data);
    }
  );

  
};

// Delete a Tutorial with the specified tutorialId in the request
exports.delete = (req, res) => {
    Tutorial.remove(req.params.tutorialId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.tutorialId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Tutorial with id " + req.params.tutorialId
            });
          }
        } else res.send({ message: `Tutorial was deleted successfully!` });
      });    
};

// Delete all Tutorial from the database.
exports.deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        else res.send({ message: `All Tutorials were deleted successfully!` });
      });    
};