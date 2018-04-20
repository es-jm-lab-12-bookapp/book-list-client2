'use strict';
var app = app || {};

(function(module){

  const bookDetails = {};
  const template = Handlebars.compile($('#book-details-template').text());

  bookDetails.initDetailView = function() {
    $('.container').hide();
    $('.book-details').show();
  };

  bookDetails.render = (book) => {
    $('#single-book').empty();
    $('#single-book').append(template(book[0]));
    app.bookDetails.initDetailView();
  };

  module.bookDetails = bookDetails;

})(app);