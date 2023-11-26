const modeloAutos = require("../models/autosModel")
const { respuesta } = require("../Helpers/respuesta");
const { Listado_Autos} = require("../services/autosService")



const controlador = {}

controlador.getAutos = async (req, res) => {
      const autos = await modeloAutos.find()
      res.json(autos)
}


controlador.saveAuto = async (req, res) =>{
  try{
    const body = req.body;
    const newAuto = new modeloAutos(body);
    await newAuto.save();
    
    respuesta.status = 200;
    respuesta.message = "Producto guardado exitosamemte";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Error al guardar el producto";
      respuesta.data = errors;
      
      res.status(500).json(respuesta);
    }
}


module.exports = controlador