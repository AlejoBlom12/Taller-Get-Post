const { Schema, model, SchemaType } = require("mongoose");

const autoSchema = new Schema({
  nombreAuto: {type: String},    
  modelo: {type: String},
  empresa: {type: String},
  precio: {type: Number},
  descripcion: {type: String,},
});

module.exports = model("auto", autoSchema, "autos");
