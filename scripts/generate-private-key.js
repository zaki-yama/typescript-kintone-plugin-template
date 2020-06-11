const fs = require("fs");
const path = require("path");
const RSA = require("node-rsa");

const key = new RSA({ b: 1024 });
const privateKey = key.exportKey("pkcs1-private");
fs.mkdirSync("dist");
fs.writeFileSync(path.resolve("dist", "private.ppk"), privateKey);
