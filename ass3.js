// const SHA256 = require('crypto-js/sha256');

// class block{
//     constructor(index,timestamp,data,prevhash=''){
//         this.index=index;
//         this.timestamp=timestamp;
//         this.data=data;
//         this.prevhash=prevhash;
//         this.hash='';
//     }
//     calculatehash(){
//         return SHA256(this.index+this.prevhash+this.timestamp+JSON.stringify(this.data)).toString();
//     }
// }

// class blockchain{
//     constructor(){
//         this.chain=[this.creategenesisblock()];
//     }
//     creategenesisblock(){
//         return new block(0,"01/01/2011","start","0");
//     }
//     getlatestblock(){
//         return this.chain[this.chain.length-1];
//     }
//     addblock(newblock){
//         newblock.prevhash = this.getlatestblock().hash;
//         newblock.hash=newblock.calculatehash();
//         this.chain.push(newblock);
//     }
// }

// let mycrypto = new blockchain();
// mycrypto.addblock(new block(1,"10/10/2017",{amount :4}));
// mycrypto.addblock(new block(2,"12/10/2017",{amount :8}));

// console.log(JSON.stringify(mycrypto,null,4));

const readline = require('readline-sync');

function to32binary(n){
    var tempw= BigInt(n).toString(2);
    var temp='';
    for(let i=0;i<32-tempw.length;i++)
        temp+='0';
    temp+=tempw;
    return temp;
}

var len = readline.question("Length of public key : ");
otemp = to32binary(len);
console.log(otemp);