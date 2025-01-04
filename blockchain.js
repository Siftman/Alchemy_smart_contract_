const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [new Block];
    }

    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1].toHash()
        this.chain.push(block);
    }
}

module.exports = Blockchain;