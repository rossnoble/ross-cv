'use strict';

var Pen = function (element) {
  this.$element = $(element);

  if (!this.$element.length) {
    throw new Error('must bind to existing element');
  }

  var self = this;

  this.addLineNumbers = function () {
    var lines, $content, $line;

    lines = this.$element.get(0).children;

    $.each(lines, function (i, v) {
      $content = $(v);
      $content.wrap('<div class="line">');

      $line = $content.parent();
      $line.wrap('<div class="row">');

      $('<div class="num"></div>').text(i + 1).insertBefore($line);
    });
  };
};

$(function () {
  var pen = new Pen('.js-vim-body')
  pen.addLineNumbers();
});
