const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");
const { secp256k1 } = require("ethereum-cryptography/secp256k1");


const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    return toHex(hash);
}

async function signMessage(msg) {
    let hashed_msg = hashMessage(msg);
    return secp256k1.sign(hashed_msg, PRIVATE_KEY, { recoverKey: true });
}

async function recoverKey(message, signature, recoveryBit) {
    let result = secp256k1.recoverPublicKey(hashMessage(message), signature, recoveryBit);
    console.log(result);
}

function getAddress(publicKey) {
    const no_formated_pk = publicKey.slice(1);
    const hash_pk = keccak256(no_formated_pk);
    return hash_pk.slice(-20);
}



recoverKey('TRX:2025-on-chain', signMessage('TRX:2025-on-chain'), 1);