import mongoose from 'mongoose';
import '../models/Books';
import '../models/Authors';

const Books = mongoose.model('Books');
const Authors = mongoose.model('Authors');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}

export function getBooks() {
    return Books.find().populate({ path: 'authors', select: 'name' });
}

export function addBooks(data) {
    const book = new Books({
        name:    data.name,
        authors: data.authors,
        date:    new Date()
    });

    return book.save();
}

export function deleteBooks(id) {
    return Books.findById(id).remove();
}

export function getAuthors() {
    return Authors.find();
}

export function getAuthorById(id) {
    return Authors.findById(id);
}