const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [new Block];
    }

    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1].toHash()
        this.chain.push(block);
    }
    isValid(){
        for(let i = 1; this.chain.length; i++){
            const block = this.chain[i];
            const prev = this.chain[i-1];
            if (block.previousHash.toString() !== prev.toHash().toString()){
                return false; 
            }
        }
        return true;
    }
}

module.exports = Blockchain;