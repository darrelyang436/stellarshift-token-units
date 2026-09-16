"use strict";

function pad32(hex) {
  const h = String(hex || "").replace(/^0x/i, "").toLowerCase();
  if (h.length > 64) throw new Error("word overflow");
  return h.padStart(64, "0");
}

function encodeUint256(n) {
  const v = typeof n === "bigint" ? n : BigInt(n);
  if (v < 0n) throw new Error("uint256 underflow");
  return "0x" + pad32(v.toString(16));
}

function encodeAddress(addr) {
  const h = String(addr || "").replace(/^0x/i, "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(h)) throw new Error("bad address");
  return "0x" + pad32(h);
}

function decodeAddress(word) {
  const h = pad32(word);
  return "0x" + h.slice(24);
}

function decodeUint256(word) {
  return BigInt("0x" + pad32(word));
}

module.exports = {
  encodeUint256,
  encodeAddress,
  decodeAddress,
  decodeUint256,
};
