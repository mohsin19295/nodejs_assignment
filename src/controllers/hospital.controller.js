const express = require("express");

const Hospital = require("../models/hospital.model");

const crudWithOnePopulateController = require("./crudwithonepopulate.controller");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Hospital).post);

router.get("", async (req, res) => {
  try {
    const hospitals = await Hospital.find()
      .populate({
        path: "Psychiatrist_Detail",
        select: {
          first_name: 1,
          last_name: 1,
          hospital_name: 1,
          number: 1,
        },
      })
      .populate({
        path: "All_Patient_Details",
        select: { name: 1, address:1, email: 1, number: 1 },
      })
      .lean()
      .exec();

    return res.status(200).send(hospitals);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get(
  "/:id",
  crudWithOnePopulateController(Hospital, {
    path: "Psychiatrist_Detail",
    select: { first_name: 1, last_name: 1, number: 1 },
  }).getOneWithOnePopulate
);

router.patch("/:id", crudController(Hospital).updateOne);
router.delete("/:id", crudController(Hospital).deleteOne);

module.exports = router;
