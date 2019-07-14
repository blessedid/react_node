import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AuthorsSchema = new Schema({
    name:       {type: String, required: true},
    photo:      {type: String},
    date_birth: {type: Date, required: true},
    date_death: {type: Date}
});

const Authors = mongoose.model('Authors', AuthorsSchema);