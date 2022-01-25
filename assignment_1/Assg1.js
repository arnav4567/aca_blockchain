const SHA256 = require('crypto-js/sha256');
const readline = require('readline-sync');
let str = readline.question("Enter your string\n");

var target = '0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';

var curr=1;
var news = str+curr;
while(SHA256(news).toString()>target){
    curr++;
    news = str+curr;
}

console.log(curr);
console.log(SHA256(news).toString());
