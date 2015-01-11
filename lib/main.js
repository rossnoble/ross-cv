function main() {
  var terminal = document.getElementsByClassName('js-terminal')[0];

  // Prevent button clicks
  var buttons = document.getElementsByClassName('js-btn');

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      e && e.preventDefault();
    }, false);
  }

  // Bind fullscreen toggle classes
  var fullTrigger = document.getElementsByClassName('js-fullscreen');

  for(var i = 0; i < fullTrigger.length; i++) {
    fullTrigger[i].addEventListener('click', function (e) {
      e && e.preventDefault();

      if (terminal.className.split(' ').indexOf('fullscreen') > -1) {
        terminal.className = terminal.className.replace(/\sfullscreen/, '');
      } else {
        terminal.className += ' fullscreen';
      }
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

$(function () { main(); });
