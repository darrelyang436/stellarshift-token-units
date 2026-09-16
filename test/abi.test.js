"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const abi = require("../src");

test("encode/decode address", () => {
  const addr = "0x0000000000000000000000000000000000000001";
  assert.equal(abi.decodeAddress(abi.encodeAddress(addr)), addr);
});

test("encode uint256", () => {
  assert.equal(abi.encodeUint256(1n).endsWith("1"), true);
});
