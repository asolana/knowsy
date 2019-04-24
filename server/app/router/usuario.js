const router = require('express').Router();
const Usuario = require('../models/usuario');

router.route('/usuarios')

    .get(function (req, res) {

        Usuario.find().then(usuarios => {
            res.json(usuarios);
        }).catch(err => {
            console.log('Error getting usuarios:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let usuario = new Usuario();

        usuario.nombre = req.body.nombre;
        usuario.contrasena = generatePass();
        usuario.email = req.body.email;
        usuario.descripcion = req.body.descripcion;
        usuario.img = req.body.img;
        usuario.estado = req.body.estado;
        usuario.tokens = req.body.tokens;
        usuario.fiable = req.body.fiable;
        Usuario.findOne({ email: usuario.email }).then(unUsuario => {
            if (unUsuario) {
                res.status(409).send({ message: 'This email already exists' });
                unUsuario = null;
            } else { unUsuario = usuario; }

            return unUsuario;
        }).then(unUsuario => {
            if (unUsuario) unUsuario.save();

            return unUsuario;
        }).then(usuarioGuardado => {
            console.log('usuarioGuardado:', usuarioGuardado);

            if (usuarioGuardado) {
                res.json(usuarioGuardado);
            }
        }).catch(err => {
            console.log('Error saving new usuario:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });

    router.route('/usuarios/:id')

    .get(function (req, res) {
        idUsuario = req.params.id;

        Usuario.findById(idUsuario).then(usuario => {
            res.json(usuario);
        }).catch(err => {
            console.log('Error getting usuarios:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .put(function (req, res) {
        let usuario = new Usuario();

        usuario.nombre = req.body.nombre;
        usuario.contrasena = req.body.contrasena;
        usuario.email = req.body.email;
        usuario.descripcion = req.body.descripcion;
        usuario.img = req.body.img;
        usuario.estado = req.body.estado;
        usuario.tokens = req.body.tokens;
        usuario.fiable = req.body.fiable;
        usuario._id = req.params.id;

        Usuario.findByIdAndUpdate({ _id: req.params.id}, usuario).then(unUsuario => {
            if (unUsuario) {
                console.log("Tarea editada:", unUsuario);
                res.json(unUsuario);
            } else {
                res.status(404).send({ message: 'This tarea does not exist' });
            }
        }).catch(err => {
            console.log('Error updating tarea:', err);
            res.status(500).send({ message: 'Server error' });
        });


    })
    .delete(function (req, res) {
        Usuario.findByIdAndRemove({ _id: req.params.id}, function(err, tarea){
            if(err){
                console.log(`Error: ${err}`)
                res.send(err);
            }else{
                res.json(tarea);
            }
            console.log(`Usuario Eliminado: ${tarea}`)
            
        });
    });










function generatePass() {
    let password = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let possibleletters = "BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz";
    let possiblevowels = "AEIOUYaeiouy";
    let possiblenumbers = "1234567890";

    for (let i = 0; i < 6; i++) {
        if ((i + 1) % 2) password += possibleletters.charAt(Math.floor(Math.random() * possibleletters.length));
        else password += possiblevowels.charAt(Math.floor(Math.random() * possiblevowels.length));
    }

    password += possiblenumbers.charAt(Math.floor(Math.random() * possiblenumbers.length));
    password += possiblenumbers.charAt(Math.floor(Math.random() * possiblenumbers.length));

    return password;
}

module.exports = router;