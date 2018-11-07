(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var CANVAS = document.createElement('canvas');
  var supportEs5 = !!Array.prototype.map;

  nx.supportWebp = function() {
    return supportEs5 && CANVAS.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.supportWebp;
  }
})();
