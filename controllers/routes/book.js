/* jslint es6 node: true */
"use strict";

let mongoose = require('mongoose');
let Book = require('../models/book');

function getBooks(req,res) {
    let query = Book.find({});
    query.exec((err,books)=>{
        if (err) return res.send(err);
        res.json(books);
    });
}

function postBook(req,res) {
    var newBook = new Book(req.body);
    newBook.save((err,book)=>{
        if (err) return res.send(err);
        res.json({message: "Book Added!", book});
    });
}

function getBook(req, res) {
    Book.findById(req.params.id, (err,book) => {
        if(err) return res.send(err);
        res.json(book);
    });
}

function deleteBook(req,res) {
    Book.remove({_id : req.params.id}, (err, result) =>{
        res.json({ message: 'Book Deleted', result});
    });
}

function updateBook(req,res){
    Book.findById({_id: req.params.id}, (err, book) =>{
        if(err) return res.send(err);
        //override common properties of book with req.body
        Object.assign(book, req.body).save((err,book) => {
            if(err) return res.send(err);
            res.json({message: 'Book Updated', book});
        });
    });
}
// pairs key and value automatically
module.exports = { getBooks, postBook, getBook, deleteBook, updateBook};