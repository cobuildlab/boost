// From https://github.com/alesanabria/hex-rgba/blob/master/index.js
export var hexToRGBA = function hexToRGBA(hex, opacity) {
  opacity = isNaN(opacity) ? 100 : opacity;
  hex = hex.replace('#', '');
  var r = 0;
  var g = 0;
  var b = 0;

  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    var rd = hex.substring(0, 1) + hex.substring(0, 1);
    var gd = hex.substring(1, 2) + hex.substring(1, 2);
    var bd = hex.substring(2, 3) + hex.substring(2, 3);
    r = parseInt(rd, 16);
    g = parseInt(gd, 16);
    b = parseInt(bd, 16);
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};