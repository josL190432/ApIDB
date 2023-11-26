const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  ApeS: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  NTel:{type:String},
  Pas: { type: String, required: true },
  CPol: { type: String},
  MPa:{
    Ntar: { type:Number },
    NDue:{type:String},
    FVe:{type:String}
  },
  FRe:{type:String},
  Tus:{type:String},
 Img: { type:String }
});

module.exports = model("Usuario", UsuarioSchema);