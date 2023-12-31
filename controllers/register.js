const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const {nombre,apellidos,correo,Telefono,contraseña,codigoUsuario,cargo,NumeroDeIdentificador,AgenciaDeSeguros,NumeroClienteAsignado,NumeroUsuarioVenta,ImagenLogo,IdUser } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            apellidos,
            correo,
            Telefono,
            contraseña,
            codigoUsuario,
            cargo,
            NumeroDeIdentificador,
            AgenciaDeSeguros,
            NumeroClienteAsignado,
            NumeroUsuarioVenta,
            ImagenLogo,
            IdUser

          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;
