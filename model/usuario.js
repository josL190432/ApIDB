const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  cedula:{type:String},
  cargo:{type:String},
  rol: { type: String},
  Unidad:{type:String},
  EPS:{type:String},
  Telefono:{type:String},
  NombreEmergencia:{type:String},
  TelefonoContacto:{type:String}
  
  
});

module.exports = model("Usuario", UsuarioSchema);