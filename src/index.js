const express = require("express");

const psychiatristController = require("./controllers/psychiatrist.controller");
const patientController = require("./controllers/patient.controller");
const hospitalController = require("./controllers/hospital.controller");

const app = express();

app.use(express.json());

app.use("/psychiatrists", psychiatristController);
app.use("/patients", patientController);
app.use("/hospitals", hospitalController);

module.exports = app;
