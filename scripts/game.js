jewel.game = (function() {
  var dom = jewel.dom,
  $ = dom.$;
  // hide the active screen and show the screen
  // with the specified id
  function showScreen(screenId) {
    var activeScreen = $("game .screen.active")[0],
    screen = $("#" + screenId)[0];
    if (activeScreen) {
      dom.removeClass(screen, "active");
    }
    dom.addClass(screen, "active");
  }
  return {
    showScreen: showScreen
  }
})();
