const { Router } = require("express");
const routes = Router();
const { getAutos, saveAuto  } = require('../controller/auto.controller')

routes.get("/listaAutos", getAutos);

routes.post("/guardandoAuto", saveAuto);

module.exports = routes;
