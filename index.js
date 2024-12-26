const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ["red", "green", "blue", "yellow", "purple", "orange"];

function findColor(color) {
    const bytes = utf8ToBytes(color);
    const hash = sha256(bytes);
    const hex = toHex(hash);
    return COLORS.find((c) => toHex(sha256(utf8ToBytes(c))) === hex);
}
module.exports = findColor;

// what is rainbow table? 
// rainbow table is a precomputed table of hashes that can be used to crack passwords. 

const a = "apple";
const abytes = utf8ToBytes(a);
const hash = sha256(abytes);
console.log(toHex(hash));

const b = "banana";
const bbytes = utf8ToBytes(b);
const bhash = sha256(bbytes);
console.log(toHex(bhash));


