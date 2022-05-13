const express = require("express");

const Patient = require("../models/patient.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Patient).post);
router.get("", crudController(Patient).get);
router.get("/:id", crudController(Patient).getOne);
router.patch("/:id", crudController(Patient).updateOne);
router.delete("/:id", crudController(Patient).deleteOne);

module.exports = router;
