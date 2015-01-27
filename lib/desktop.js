'use strict';

var Desktop = function () {
  var self = this;

  this.$desktop = $('.js-desktop');
  this.$window = $(window);

  this.windowHeight = function () {
    return this.$window.height();
  };

  this.setDesktopHeight = function () {
    this.$desktop.css({
      'min-height': this.windowHeight()
    });
  };

  this.initialize = function () {
    this.setDesktopHeight();

    this.$window.bind('resize', function () {
      self.setDesktopHeight();
    });
  };

  this.initialize();
};
