"use strict";

window.cast = {

  "toNumber": (val) => {
    let num = Number(val);

    return isFinite(num) ? num : 0;
  },

  "toString": (val) => {
    return String(val);
  },

  "toBool": (val) => {

    if (typeof val !== "number") {
      val = toNumber(val);
    }

    return Boolean(val);
  }
  
};