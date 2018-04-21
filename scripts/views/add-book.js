'use strict';

var app = app || {};

(module => {

  const addBook = {};

  addBook.init = () => {
    $('.container').hide();
    $('#new-book').show();

    $('#add-book').on('click', addBook.new);
  };

  addBook.new = event => {
    event.preventDefault();
    let book = new app.Book({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val()
    });
    console.log(book);
    book.create();
    window.location = '/';
  };

  module.addBook = addBook;

})(app);