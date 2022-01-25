const crypto = require('crypto');
const readline = require('readline-sync');
const now = require('nano-time');
var fs = require('fs');

function to_int(str, start, end){
    let size = end - start;
    if(size == 4){
        let res = 0;
        for(let i=0; i<size;i++){
            res*=256;
            res+=str[i + start];
        }
        return res;
    }
    else{
        let res = 0n;
        for(let i=0; i<size;i++){
            res = res*256n;
            res+=BigInt(str[i+start]);
        }
        return res;
    }
}

//----------------------------MAIN CODE STARTS-------------------------------//

var path = readline.question("Binary data file path : ");
let ans=path;
var data = fs.readFileSync(ans);

let hash = crypto.createHash('sha256').update(data).digest('hex');
hash = hash.toString();
console.log("Transaction ID : ", hash);

var ind=0;
var tm = to_int(data, ind, ind+8);
console.log("Timestamp : ",tm);
ind+=8;

var n_inp = to_int(data, ind, ind+4);
console.log("Number of inputs : ",n_inp);
ind+=4;

for(let i=1;i<=n_inp;i++){
    console.log("Input ",i,": ");

    var t_id = data.toString("hex", ind, ind + 32);
    console.log("Transaction ID : ", t_id);
    ind+=32;
    
    var index = to_int(data,ind,ind+4); 
    console.log("Index : ",index);
    ind+=4;
    
    var len_sig = to_int(data,ind,ind+4);
    console.log("Length of signature : ",len_sig);
    ind+=4;

    var sig = data.toString("hex",ind,ind+len_sig);
    console.log("Signature : ",sig);
    ind+=len_sig;
}

n_out = to_int(data,ind,ind+4);
console.log("Number of outputs : ",n_out);;
ind+=4;

for(let i=1;i<=n_out;i++){
    console.log("Output ",i,": ");

    var coins = BigInt(to_int(data,ind,ind+8));
    console.log("Number of coins : ",coins);
    ind+=8;
    
    var len_pkey = to_int(data,ind,ind+4);
    console.log("Length of public key : ",len_pkey);
    ind+=4;

    var p_key = data.toString("utf-8",ind,ind+len_pkey);
    console.log("Public Key : ",p_key);
    ind+=len_pkey;
}