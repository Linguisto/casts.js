"use strict";

window.prototype.toNumber = (val) => {
  let num = Number(val);

  return isNaN(num) ? 0 : num;
};

window.prototype.toString = (val) => {
  return String(val);
};

window.prototype.toBool = (val) => {

  if (typeof val !== 'number') {
    val = toNumber(val);
  }

  return Boolean(val);
};