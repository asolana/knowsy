const router = require('express').Router();
const Tarea = require('../models/tarea');

router.route('/tareas')

    .get(function (req, res) {
        Tarea.find().then(tareas => {
            res.json(tareas);
        }).catch(err => {
            console.log('Error getting tareas:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let tarea = new Tarea();

        tarea.nombre = req.body.nombre;
        tarea.idusuario = req.body.idusuario;
        tarea.puntuacion = req.body.puntuacion;
        tarea.img = req.body.img;
        tarea.contpuntuacion = req.body.contpuntuacion;
        tarea.descripcion = req.body.descripcion;
        tarea.precio = req.body.precio;
        tarea.idcategoria = req.body.idcategoria;

        tarea.save().then(tareaGuardada => {
            console.log('tareaGuardada:', tareaGuardada);

            if (tareaGuardada) {
                res.json(tareaGuardada);
            }
        }).catch(err => {
            console.log('Error saving new tarea:', err);
            res.status(500).send({ message: 'Server error' });
        });

    });

router.route('/tareas/:id')

    .get(function (req, res) {

        Tarea.findById(req.params.id).then(tarea => {
            res.json(tarea);
        }).catch(err => {
            console.log('Error getting tarea:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .put(function (req, res) {
        let tarea = new Tarea();

        tarea.nombre = req.body.nombre;
        tarea.idusuario = req.body.idusuario;
        tarea.puntuacion = req.body.puntuacion;
        tarea.img = req.body.img;
        tarea.contpuntuacion = req.body.contpuntuacion;
        tarea.descripcion = req.body.descripcion;
        tarea.precio = req.body.precio;
        tarea.idcategoria = req.body.idcategoria;

        Tarea.findById(req.params.id).then(unaTarea => {
            if (unaTarea) {
                unaTarea = tarea;
            } else { 
                res.status(409).send({ message: 'This email already exists' });
                unaTarea = null;
            }

            return unaTarea;
        }).then(unaTarea => {
            if (unaTarea) unaTarea.save();

            return unaTarea;
        }).then(tareaUpdateada => {
            console.log('tareaUpdated:', tareaUpdateada);

            if (tareaUpdateada) {
                res.json(tareaUpdateada);
            }
        }).catch(err => {
            console.log('Error updating tarea:', err);
            res.status(500).send({ message: 'Server error' });
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