const SHA256 = require('crypto-js/sha256');

class transaction{
    constructor(from,to,amount){
        this.from = from;
        this.to = to;
        this.amount=amount;
    }
}

class block{
    constructor(timestamp,data,prevhash=''){
        this.timestamp=timestamp;
        this.data=data;
        this.prevhash=prevhash;
        this.hash=this.calculatehash();
        this.nonce = 0;        
    }
    calculatehash(){
        return SHA256(this.index+this.prevhash+this.timestamp+JSON.stringify(this.data)+this.nonce).toString();
    }

    mineblock(diff){
        while(this.hash.substring(0,diff)!=Array(diff+1).join("0")){
            this.nonce++;
            this.hash = this.calculatehash();
        }
        console.log("Block mined : " ,this.hash,"   ",this.nonce);
    }
}

class blockchain{
    constructor(){
        this.chain=[this.creategenesisblock()];
        this.pendingtransaction=[];
        this.diff=3;
        this.miningreward=100;
    }
    creategenesisblock(){
        return new block("01/01/2011","start","0");ṁ
    }
    getlatestblock(){
        return this.chain[this.chain.length-1];
    }
    minependingtransactions(miningrewardaddress){
        let block = new block(Date.now(),this.pendingtransaction);
        block.mineblock(this.difficulty);

        this.chain.push(block);
        console.log("mined");

        this.pendingtransaction=[
            new transaction(null,this.miningrewardaddress,this.miningreward)
        ];
    }

    createtransaction(transaction){
        this.pendingtransaction.push(transaction);
    }

    getbalance(address){
        let balance=0;
        for(const block of this.chain){
            for(const trans of block.transaction){
                if(trans.fromaddress==this.address){
                    balance-=trans.amount;
                }
                if(trans.toaddress==this.address){
                    balance+=trans.amount;
                }
            }
        }
    }

    isvalid(){
        for(let i=1;i<this.chain.length;i++){
            const curblock = this.chain[i];
            const prevblock = this.chain[i-1];

            if(curblock.hash!=curblock.calculatehash())
                return false;
            if(curblock.prevhash!=prevblock.hash)
                return false;

            return true;    
        }
    }
}

let mycrypto = new blockchain();
mycrypto.createtransaction(new transaction('address1','address2',100));
mycrypto.createtransaction(new transaction('address2','address1',50));

console.log("\nStarting the mining...");
mycrypto.minependingtransactions('xaviers-address');

console.log("\nBalance of xavier: ", mycrypto.getbalance('xaviers-address'));
console.log("\nStarting the mining...");
mycrypto.minependingtransactions('xaviers-address');

console.log("\nBalance of xavier: ", mycrypto.getbalance('xaviers-address'));

