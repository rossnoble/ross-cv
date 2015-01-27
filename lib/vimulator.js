'use strict';

var Vimulator = function () {
  var self = this;

  this.$terminal = $('.js-terminal');
  this.$doc = $('.js-document');

  this._bindDraggables = function () {
    this.$terminal.draggable({
      handle: this.$terminal.find('.js-terminal-header')
    });

    this.$doc.draggable();
  };

  this._bindFullScreen = function () {
    $('.js-fullscreen').click(function (e) {
      e && e.preventDefault();

      if (self.$terminal.hasClass('fullscreen')) {
        self.$terminal
          .removeClass('fullscreen')
          .draggable('enable');
      } else {
        self.$terminal
          .addClass('fullscreen')
          .removeAttr('style')
          .draggable('disable')
      }
    });
  };

  this._bindMinimize = function () {
    $('.js-minimize').click(function (e) {
      e && e.preventDefault();

      self.$terminal.animate({
        'top': '900px',
        'left': '2000px',
        'width': '10%',
        'height': '10%'
      }, 350, function () {
        self.$terminal.hide();
      });
    });
  };

  this._bindClose = function () {
    $('.js-close').click(function (e) {
      e && e.preventDefault();
      self.$terminal.hide();
    });
  };

  this._bindDocumentSelect = function () {
    this.$doc.mousedown(function () {
      self.$doc.toggleClass('is-selected');
    });

    this.$doc.dblclick(function () {
      self.$terminal.removeAttr('style').show();
    });

    $('body').bind('click', function (e) {
      if ($(e.target).parents('.js-document').length) {
        return;
      }

      self.$doc.removeClass('is-selected');
    });

    // Open on enter key when selected
    $('body').keyup(function (e) {
      if ( (e && e.which === $.ui.keyCode.ENTER) &&
            self.$doc.hasClass('is-selected') ) {
        self.$terminal.removeAttr('style').show();
      }
    });
  };

  this.initialize = function () {
    this._bindDraggables();
    this._bindFullScreen();
    this._bindMinimize();
    this._bindClose();
    this._bindDocumentSelect();
  };

  this.initialize();
};

