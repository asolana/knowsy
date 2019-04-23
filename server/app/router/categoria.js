const router = require('express').Router();
const Categoria = require('../models/categoria');

router.route('/categorias')

    .get(function (req, res) {
        Categoria.find().then(categorias => {
            res.json(categorias);
        }).catch(err => {
            console.log('Error getting categorias:', err);
            res.status(500).send({ message: 'Server error' });
        });

    });

router.route('/categorias/:id')

    .get(function (req, res) {

        Categoria.findById(req.params.id).then(categoria => {
            res.json(categoria);
        }).catch(err => {
            console.log('Error getting categoria:', err);
            res.status(500).send({ message: 'Server error' });
        });

    });


module.exports = router;