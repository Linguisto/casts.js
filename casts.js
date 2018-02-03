"use strict";

window.cast = {

  "toNumber": (val) => {
    let num = Number(val);

    return isNaN(num) ? 0 : num;
  },

  "toString": (val) => {
    return String(val);
  },

  "toBool": (val) => {

    if (typeof val !== 'number') {
      val = toNumber(val);
    }

    return Boolean(val);
  }
  
};