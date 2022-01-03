const { keccak256 } = require("web3-utils");
const { certificate } = require("./collections/dali6801/dali6801.json");

let authHash = keccak256(certificate);
console.log(`Authenticity hash is: ${authHash}`);