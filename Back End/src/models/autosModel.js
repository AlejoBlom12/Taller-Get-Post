const { Schema, model} = require("mongoose");

const autoSchema = new Schema({
  nombreAuto: {type: String,
  required: [true, "pasa"]
},    
  modelo: {type: String,
    required: [true, "pasa"]
  },
  empresa: {type: String,
    required: [true, "pasa"]
  },
  precio: {type: Number,
    required: [true, "pasa"]
  },
  descripcion: {type: String,
    required: [true, "pasa"]
  }
});

module.exports = model("auto", autoSchema, "autos");
