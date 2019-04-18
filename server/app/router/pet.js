const router = require('express').Router();
const Pet = require('../models/pet');

router.route('/pets')

    .get(function (req, res) {

        Pet.find().then(pets => {
            res.json(pets);
        }).catch(err => {
            console.log('Error getting pets:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let pet = new Pet();

        pet.nombre = req.body.nombre;
        pet.foto = req.body.foto;
        pet.edad = req.body.edad;

        Pet.findOne({ nombre: pet.nombre }).then(aPet => {
            if (aPet) {
                res.status(409).send({ message: 'This nombre already exists' });
                aPet = null;
            } else { aPet = pet; }

            return aPet;
        }).then(aPet => {
            if (aPet) aPet.save();

            return aPet;
        }).then(savedPet => {
            console.log('savedPet:', savedPet);

            if (savedPet) {
                res.json(savedPet);
            }
        }).catch(err => {
            console.log('Error saving new pet:', err);
            res.status(500).send({ message: 'Server error' });
        });


    })
    .put(function (req, res) {
        
    })
    .delete(function (req, res) {

    });

router.route('/pets/:pid')
    .get(function(req, res){
        Pet.findById(req.params.pid).then(pet => {
            res.json(pet);
        }).catch(err => {
            console.log('Error getting pets:', err);
            res.status(500).send({ message: 'Server error' });
        });
    });

module.exports = router;