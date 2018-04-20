'use strict';
var app = app || {};

(function(module){

  const bookDetails = {};

  bookDetails.initDetailView = function() {
    $('.container').hide();
    $('.book-details').show();
  };

  bookDetails.render = (book) => {
    let template = Handlebars.compile($('#book-details-template').text());
    $('#single-book').append(template(book[0]));
    app.bookDetails.initDetailView();
  };

  module.bookDetails = bookDetails;

})(app);