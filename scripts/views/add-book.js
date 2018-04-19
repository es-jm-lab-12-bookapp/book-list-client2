'use strict';

var app = app || {};

(module => {

  const addBook = {};

  addBook.init = () => {
    $('.container').hide();
    $('#new-book').show();
    
    $('#add-book').on('click',() => {
      let book = new app.Book({
        title: $('#title').val(),
        author: $('#author').val(),
        isbn: $('#isbn').val(),
        image_url: $('#image_url').val(),
        description: $('#description').val()
      })
      app.Book.create(book);
    });

  };

  module.addBook = addBook;

})(app);