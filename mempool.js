const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = [];
    while(transactions.length < MAX_TRANSACTIONS && mempool.length > 0){
        transactions.push(mempool.pop());
    }
    let nonce = 0;
    let block = { id: blocks.length, transactions, nonce};
    let hash = SHA256(JSON.stringify(block)); 

    while(BigInt(`0x${hash}`) > TARGET_DIFFICULTY){

        let block = { id: blocks.length, transactions, nonce};
        hash = SHA256(JSON.stringify(block));
        nonce += 1; 

    }

    blocks.push({...block, hash});
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};