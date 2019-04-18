const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const CategoriaSchema   = new Schema({
    nombre: {
        type: String,
        required: true
    },
    img: String
});

module.exports = mongoose.model('Categoria', CategoriaSchema);