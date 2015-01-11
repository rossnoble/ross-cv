'use strict';

var Vimulator = function () {
  var self = this;

  this.$terminal = $('.js-terminal');

  this._makeDraggable = function () {
    this.$terminal.draggable({
      handle: this.$terminal.find('.js-terminal-header')
    });
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
          .draggable('disable')
          .addClass('fullscreen')
          .removeAttr('style');
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
        self.terminal.remove();
      });
    });
  };

  this._bindClose = function () {
    $('.js-close').click(function (e) {
      e && e.preventDefault();
      self.$terminal.remove();
    });
  };

  this.initialize = function () {
    this._makeDraggable();
    this._bindFullScreen();
    this._bindMinimize();
    this._bindClose();
  };

  this.initialize();
};

window.Vimulator = Vimulator;

$(function () { new Vimulator(); });
