const router = require('express').Router();
const Tarea = require('../models/tarea');
const ObjectId = require('mongoose').Types.ObjectId; 

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
        tarea.idCategoria = req.body.idCategoria;

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
        tarea._id = req.params.id;

        Tarea.findByIdAndUpdate({ _id: req.params.id}, tarea).then(unaTarea => {
            if (unaTarea) {
                console.log("Tarea editada:", unaTarea);
                res.json(unaTarea);
            } else {
                res.status(404).send({ message: 'This tarea does not exist' });
            }
        }).catch(err => {
            console.log('Error updating tarea:', err);
            res.status(500).send({ message: 'Server error' });
        });


    })
    .delete(function (req, res) {
        Tarea.findByIdAndRemove({ _id: req.params.id}, function(err, tarea){
            if(err){
                console.log(`Error: ${err}`)
                res.send(err);
            }
            console.log(`Tarea Eliminada: ${tarea}`)
            
        });
    });


module.exports = router;