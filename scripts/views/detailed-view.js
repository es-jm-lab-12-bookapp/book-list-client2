'use strict';
var app = app || {};

(function(module){

  const bookDetails = {};

  bookDetails.initDetailView = function() {
    $('.container').hide();
    $('.book-details').show();
    let template = Handlebars.compile($('#book-details-template').text());
  };
  bookDetails.find = () => {
    $('.book-items').each(function(){
      $(this).on('click', () => {

        let book = new app.Book(app.Book.all[$(this).data('bookid')-1]);
        // console.log(book);
        book.fetchOne(book);

      });
    });
  };
  module.bookDetails = bookDetails;

})(app);