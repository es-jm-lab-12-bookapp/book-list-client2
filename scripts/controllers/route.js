'use strict';
var app = app || {};


page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', app.bookView.initIndexPage);
page.start();