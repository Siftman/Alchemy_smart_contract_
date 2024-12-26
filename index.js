const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findColor(hash) {
    for(let i = 0; i < 6; i++){
        let aBytes = utf8ToBytes(COLORS[i]);
        let aHash = sha256(aBytes);
        if (toHex(hash) == toHex(aHash)){
            console.log(COLORS[i]);
            return COLORS[i];
        }
    }
    return false; 
}

module.exports = findColor;