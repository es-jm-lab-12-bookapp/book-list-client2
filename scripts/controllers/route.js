'use strict';
var app = app || {};
// // tweak to run on GH Pages
// if (window.location.protocol.startsWith('https:')) {
//   page.base('/book-list-client2');
// }



page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});

page('/', app.bookView.showAll);
page('/book/:id', ctx => app.Book.fetchOne(ctx.params.id));
page('/new', app.addBook.init);
page.start();