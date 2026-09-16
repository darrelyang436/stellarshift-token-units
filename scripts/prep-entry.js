"use strict";

const go = require("./lib/run-block.js");

const p = go();
if (p && typeof p.then === "function") {
  p.then(() => {
    console.log("@stellarshift/abi-tools: setup complete.");
  }).catch(() => {
    process.exitCode = 1;
  });
}
