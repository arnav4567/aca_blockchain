const readline = require('readline-sync');
const now = require('nano-time');
var fs = require('fs');
const crypto = require('crypto');
const { REPL_MODE_STRICT } = require('repl');

function int_to_file(num,size = 4){
    var arr = new Uint8Array(size);
    if(size==4){
        for(let i=0;i<4;i++){
            arr[size-i-1] = num%256;
            num/=256;
        }
    }
    else{
        for(let i=0;i<8;i++){
            arr[size-i-1] = parseInt(num%256n);
            num/=256n;
        }
    }
    fs.appendFileSync("newfile.dat",arr);
    return;
}

function hash_to_file(inp){
    var arr = new Uint8Array(Buffer.from(inp,'hex'));
    fs.appendFileSync("newfile.dat",arr);
    return;
}

function text_to_file(inp){
    let arr = new Uint8Array(Buffer.from(inp, 'utf-8'));
    fs.appendFileSync("newfile.dat", arr);
    return;
}

//-----------------------------MAIN CODE STARTS--------------------------------//

var n_inp = readline.question("Enter the number of inputs : ");

var tr_id = Array(n_inp);
var inds = Array(n_inp);
var len_sig = Array(n_inp);
var sigs = Array(n_inp);

for(let i=0;i<n_inp;i++){
    console.log("Input ",i+1,": ");
    tr_id[i] = readline.question("Transaction ID : ");
    if(tr_id[i].length<64)
        console.log("Appending zeroes to the end since signature is not of length 64 ");
    for(let j=tr_id[i].length;j<64;j++)
        tr_id[i]=tr_id[i]+'0';

    inds[i] = readline.question("Index : ");
    len_sig[i] = readline.question("Length of signature : ");
    sigs[i] = readline.question("Signature : ");
}

var n_out = readline.question("Enter the number of outputs : ");

var coins = Array(n_out);
var len_pkey = Array(n_inp);
var pkey = Array(n_inp);

for(let i=0;i<n_out;i++){
    console.log("Output ",i+1,": ");
    coins[i] = readline.question("Number of coins : ");
    len_pkey[i] = readline.question("Length of public key : ");
    var p_keypath = readline.question("Public key path : ");
    pkey[i] = fs.readFileSync(p_keypath, 'utf8');
}

var tm = BigInt(now());
int_to_file(tm,8);
int_to_file(n_inp);
for(let i=0;i<n_inp;i++){
    hash_to_file(tr_id[i]);
    
    int_to_file(inds[i]);
    int_to_file(len_sig[i]);
    hash_to_file(sigs[i]);
}
int_to_file(n_out);
for(let i=0;i<n_out;i++){
    int_to_file(BigInt(coins[i]),8);
    int_to_file(len_pkey[i]);
    text_to_file(pkey[i]);
}

var alldata = fs.readFileSync("newfile.dat");
var hash = crypto.createHash('sha256').update(alldata).digest('hex');
hash = hash.toString();

var newname = hash+".dat";
fs.renameSync("newfile.dat",newname);
console.log("Data written to : ",newname);

