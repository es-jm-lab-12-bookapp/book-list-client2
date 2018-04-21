'use strict';
var app = app || {};


page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});

page('/', app.bookView.showAll);
page('/book/:id', ctx => app.Book.fetchOne(ctx.params.id));
page('/new', app.addBook.init);
page.start();