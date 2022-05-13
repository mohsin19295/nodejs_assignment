const express = require("express");

const Psychiatrist = require("../models/psychiatrist.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Psychiatrist).post);
router.get("", crudController(Psychiatrist).get);
router.get("/:id", crudController(Psychiatrist).getOne);
router.patch("/:id", crudController(Psychiatrist).updateOne);
router.delete("/:id", crudController(Psychiatrist).deleteOne);

module.exports = router;
