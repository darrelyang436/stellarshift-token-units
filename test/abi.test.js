"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const units = require("../src");

test("toWei/fromWei", () => {
  assert.equal(units.toWei(1n, 18), 10n ** 18n);
  assert.equal(units.fromWei(10n ** 18n, 18), 1n);
});
