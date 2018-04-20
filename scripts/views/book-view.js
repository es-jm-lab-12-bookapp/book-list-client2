'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    $('#single-book').empty();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };


  bookView.showAll = function() {
    $('#single-book').empty();  
    $('.container').hide();
    $('.book-view').show();
  };
  module.bookView = bookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});