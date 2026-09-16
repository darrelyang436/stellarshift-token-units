"use strict";

function toWei(amount, decimals) {
  const d = decimals == null ? 18 : Number(decimals);
  const n = typeof amount === "bigint" ? amount : BigInt(amount);
  if (d < 0 || d > 36) throw new Error("bad decimals");
  return n * (10n ** BigInt(d));
}

function fromWei(wei, decimals) {
  const d = decimals == null ? 18 : Number(decimals);
  const n = typeof wei === "bigint" ? wei : BigInt(wei);
  if (d < 0 || d > 36) throw new Error("bad decimals");
  return n / (10n ** BigInt(d));
}

module.exports = { toWei, fromWei };
