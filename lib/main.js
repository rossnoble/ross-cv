function main() {
  var terminal = document.getElementsByClassName('js-terminal')[0];

  // Prevent button clicks
  var buttons = document.getElementsByClassName('js-btn');

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      e && e.preventDefault();
    }, false);
  }

  // Bind close window triggers
  var closeTrigger = document.getElementsByClassName('js-close');

  for(var i = 0; i < closeTrigger.length; i++) {
    closeTrigger[i].addEventListener('click', function (e) {
      e && e.preventDefault();

      terminal && terminal.remove();
    }, false);
  }
}

window.RHN = function () {
  var self = this;

  this.$terminal = $('.js-terminal');

  this._makeDraggable = function () {
    this.$terminal.draggable({
      handle: this.$terminal.find('.js-terminal-header')
    });
  };

  this._bindFullScreen = function () {
    var $terminal = this.$terminal;

    $('.js-fullscreen').click(function () {
      if ($terminal.hasClass('fullscreen')) {
        $terminal
          .removeClass('fullscreen')
          .draggable('enable');
      } else {
        $terminal
          .draggable('disable')
          .addClass('fullscreen')
          .removeAttr('style');
      }
    });
  };

  this.initialize = function () {
    this._makeDraggable();
    this._bindFullScreen();
  };

  this.initialize();
};

$(function () {
  main();
  new RHN();
});
