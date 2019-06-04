import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    name:    {type: String, required: true},
    authors: {type: Schema.Types.Mixed, required: true, ref: 'Authors'},
    // authors: { type: Schema.Types.ObjectId, ref: 'Authors' },
    date:    {type: Date}
});

const Books = mongoose.model('Books', BooksSchema);