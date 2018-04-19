'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert cloud API server URL here';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  Book.fetchAll = callback =>
    $.get(`${ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.fetchOne = callback =>
    $.get(`${ENV.apiUrl}/api/v1/books/:id`)
      .then(Book.loadOne)
      .then(callback)
      .catch(errorCallback);

  Book.prototype.create = function(callback) {
    $.post(`${ENV.apiUrl}/api/v1/books/`,{
      author: this.author,
      title: this.title,
      isbn: this.isbn,
      image_url: this.image_url,
      description: this.description
    }).then(callback)
      .catch(errorCallback);
  };

  module.Book = Book;
})(app);
