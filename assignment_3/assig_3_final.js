const SHA256 = require('crypto-js/sha256');
const readline = require('readline-sync');
const now = require('nano-time');
var fs = require('fs');

function to32binary(n){
    var tempw= BigInt(n).toString(2);
    var temp='';
    for(let i=0;i<32-tempw.length;i++)
        temp+='0';
    temp+=tempw;
    return temp;
}

function to64binary(n){
    var tempw= BigInt(n).toString(2);
    var temp='';
    for(let i=0;i<64-tempw.length;i++)
        temp+='0';
    temp+=tempw;
    return temp;
}

var convertBase = function () {
    function convertBase(baseFrom, baseTo) {
        return function (num) {
            return parseInt(num, baseFrom).toString(baseTo);
        };
    }
    convertBase.bin2dec = convertBase(2, 10);
    convertBase.bin2hex = convertBase(2, 16);
    convertBase.dec2bin = convertBase(10, 2);
    convertBase.dec2hex = convertBase(10, 16);
    convertBase.hex2bin = convertBase(16, 2);
    convertBase.hex2dec = convertBase(16, 10);
    return convertBase;
}();

var n_inp = readline.question("Enter the number of inputs : ");
var itemp = '';
for(let i=1;i<=n_inp;i++){
    console.log("Input ",i,": ");
    var transaction_id = readline.question("Transaction ID : ");
    var ind = readline.question("Index : ");
    var length_sig = readline.question("Length of signature : ");
    var signature = readline.question("Signature : ");

    for(let i=0;i<256-convertBase.hex2bin(transaction_id).length;i++)
        itemp+='0';
    itemp+=convertBase.hex2bin(transaction_id);
    
    itemp+=to32binary(ind);
    itemp+=to32binary(length_sig);
    itemp+=convertBase.hex2bin(signature);
}

var n_out = readline.question("Enter the number of outputs : ");
var otemp='';
for(let i=1;i<=n_out;i++){
    console.log("Output ",i,": ");
    var n_coins = readline.question("Number of coins : ");
    var len = readline.question("Length of public key : ");
    var p_keypath = readline.question("Public key path : ");

    otemp+=to64binary(n_coins);
    otemp+=to32binary(len);
    var pubkey = fs.readFileSync(p_keypath, 'utf8');
    otemp+= pubkey.split('').map(c => c.charCodeAt().toString(2).padStart(8, '0')).join('');
}

var tm = BigInt(now());
var stamp = tm.toString(2);

var inpp = '';
inpp+=to32binary(n_inp);
var outt = to32binary(n_out);

var finans =  stamp + inpp + itemp + outt + otemp;
//console.log(finans);

var ans = SHA256(finans).toString();
var topath = "./"+ans+".dat";
fs.writeFileSync(topath, finans,"utf8");
