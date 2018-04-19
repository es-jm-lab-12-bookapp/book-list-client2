'use strict';
var app = app || {};


page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});

page('/', app.bookView.showAll);
// page('/books/:book_id', app.Book.fetchOne);
page('/new', app.addBook.init);
page.start();