'use strict';

var Pen = function (element) {
  this.$element = $(element);

  if (!this.$element.length) {
    throw new Error('must bind to existing element');
  }

  var self = this;

  this.draw = function (value, opts) {
    opts = opts || {};

    var $row = $('<div class="row">');

    var _num = this._findNumber($row);

    var $num = $('<div class="num"></div>')
      .text(_num).appendTo($row);

    var $line = $('<div class="line"></div>')
      .html(value).appendTo($row);

    if (opts.blank) $num.addClass('blank').text('~');

    $row.appendTo(this.$element);
  };

  this._findNumber = function ($row) {
    var $last = this.$element.find('.row').last();

    if ($last.length) {
      return parseInt($last.find('.num').text()) + 1;
    }

    return 1;
  };

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
