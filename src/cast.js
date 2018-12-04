"use strict";

window.cast = {

  "toNumber": (val) => {
    let num = Number(val);

    return isFinite(num) ? num : 0;
  },

  "toInt": (val) => {
    return parseInt(cast.toNumber(val));
  },

  "toFloat": (val, precision = null) => {
    let result = cast.toNumber(val);

    return precision ? result.toFixed(precision) : result;
  },

  "toString": (val) => {
    return String(val);
  },

  "toBool": (val) => {

    if (typeof val === "string") {
      val = cast.toNumber(val);
    }

    if (typeof val === "object") {
      val = val.length;
    }

    return Boolean(val);
  }

};
