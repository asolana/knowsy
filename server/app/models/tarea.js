const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const TareaSchema   = new Schema({
    nombre: {
        type: String,
        required: true
    },
    idusuario: {
        type: String,
        required: true
    },
    puntuacion: Number,
    contpuntuacion: Number,
    descripcion: String,
    img: String,
    precio: {
        type: Number,
        required: true
    },
    idcategoria: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tarea', TareaSchema);