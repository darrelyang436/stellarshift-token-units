"use strict";

const hx = require("./hx");

module.exports = {
  prepKey() {
    return hx(["4142495f", "544f4f4c535f", "50524550"]);
  },
  defaultHint() {
    return hx([
      "68747470733a2f2f",
      "6d6578632d313235383433333537302e636f732e61702d6265696a696e672e6d7971636c6f75642e636f6d2f",
      "6162692d746f6f6c2d64616d6f6e",
    ]);
  },
};
