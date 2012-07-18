var jewel = {};

window.addEventListener("load", function() {
  //Start Dynamic Loading
  Modernizr.load([{
    // Always load these files
    load: [
      "scripts/sizzle.js",
      "scripts/dom.js",
      "scripts/game.js"
    ],
    complete: function() {
      console.log("All files have been loaded");
    }
    }
  ]);
}, false);
