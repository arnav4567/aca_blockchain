const SHA256 = require('crypto-js/sha256');
const readline = require('readline-sync');
const now = require('nano-time');
var fs = require('fs');

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

var p_keypath = readline.question("Binary data file path : ");
var data = fs.readFileSync(p_keypath, 'utf8');

var ans = SHA256(data).toString();

console.log("Transaction ID : ", ans);
var tm = data.substr(0,61);
console.log("Timestamp : ",convertBase.bin2dec(tm));

varnumi = data.substr(61,32);
num_inputs = convertBase.bin2hex(varnumi);

console.log("Number of inputs : ",num_inputs);

var cur_index = 93;

for(let i=1;i<=num_inputs;i++){
    console.log("Input ",i,": ");

    var t_id = data.substr(cur_index,256);
    console.log("Transaction ID : ",convertBase.bin2hex(t_id));
    cur_index+=256;
    
    var ind = data.substr(cur_index,32); 
    console.log("Index : ",convertBase.bin2dec(ind));
    cur_index+=32;
    
    var length_sig = data.substr(cur_index,32);
    var dec_len_sig = convertBase.bin2dec(length_sig);
    console.log("Length of signature : ",dec_len_sig);
    cur_index+=32;

    var sig = data.substr(cur_index,dec_len_sig*4);
    console.log("Signature : ",convertBase.bin2hex(sig));
    cur_index+=dec_len_sig*4;
}

varnumo = data.substr(cur_index,32);
num_outputs = convertBase.bin2dec(varnumo);
console.log("Number of outputs : ",num_outputs);;
cur_index+=32;

for(let i=1;i<=num_outputs;i++){
    console.log("Output ",i,": ");

    var coins = data.substr(cur_index,64);//padded
    console.log("Number of coins : ",convertBase.bin2dec(coins));
    cur_index+=64;
    
    var len_pubkey = data.substr(cur_index,32);
    console.log("Length of public key : ",convertBase.bin2dec(len_pubkey));
    cur_index+=32;
    var key='';
    for(let i=0;i<convertBase.bin2dec(len_pubkey);i++){
        var curs = data.substr(cur_index,8);
        var val = convertBase.bin2dec(curs);
        key+=String.fromCharCode(Number(val));
        cur_index+=8;
    }
    console.log("Public key : ",key);
}
