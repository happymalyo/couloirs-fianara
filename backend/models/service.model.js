const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String, required: true},
    categorie: {type: String},
    sous_categorie: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String},
    site_web: {type: String},
    phone: {type: String, required: true},
    ville:{type: String, default:"Fianarantsoa"},
    adresse: {type: String, required: true},
    email: {type: String, unique: true, required: true}
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;