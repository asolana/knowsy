const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const UsuarioSchema   = new Schema({
    nombre: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true //[true, 'Email already used']
    },
    descripcion: String,
    img: String,
    estado: Boolean,
    tokens: Number,
    fiable: Boolean
});

module.exports = mongoose.model('Usuario', UsuarioSchema);