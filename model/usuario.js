const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  Telefono:{type:String},
  contraseña: { type: String, required: true },
  codigoUsuario: { type: String},
  cargo:{type:String},
  NumeroDeIdentificador:{type:String},
  AgenciaDeSeguros:{type:String},
  NumeroClienteAsignado:{type:String},
  NumeroUsuarioVenta:{type:String},
  ImagenLogo:{type:String},
  IdUser:{Type:String}
  
  
  
});

module.exports = model("Usuario", UsuarioSchema);