const crypto = require('crypto');
const readline = require('readline-sync');
const now = require('nano-time');
var fs = require('fs');

var ind = readline.question("Index of the block : ");
var phash = readline.question("Hash of the parent block : ");
var target = readline.question("Target : ");
var path = readline.question("Path of block body : ");

str = fs.readFileSync(path);
var hash = crypto.createHash('sha256').update(str).digest('hex');
hash = hash.toString();

var nonce=1;
var tm = BigInt(now());
var init_time = BigInt(now());
var header = ind+phash+hash+target+tm+nonce;
while(crypto.createHash('sha256').update(header).digest('hex')>target){
    nonce++;
    cur = BigInt(now());
    tm = cur.toString();
    header = ind+phash+hash+target+tm+nonce;
}
var fin_time = BigInt(now());
console.log("Nonce value : ",nonce);
console.log("Timestamp : ",cur);
console.log("Hash obtained : ",crypto.createHash('sha256').update(header).digest('hex'));
console.log("Time taken for the nonce to be calculated : ",fin_time-init_time);

