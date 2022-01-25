var crypto = require('crypto');
const path = require('path');
var fs = require('fs');

function getkeyfiles(){
    const keypair = crypto.generateKeyPairSync('rsa',{
        modulusLength: 512,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    });
    var privatekey = keypair.privateKey;
    fs.openSync("./Keys/private.pem", "w");
    fs.writeFileSync("./Keys/private.pem", privatekey,"utf8");

    var publickey = keypair.publicKey;
    fs.openSync("./Keys/public.pem", "w");
    fs.writeFileSync("./Keys/public.pem", publickey,"utf8");
}

getkeyfiles();

var prikey = fs.readFileSync("./Keys/private.pem", 'utf8');
var pubkey = fs.readFileSync("./Keys/public.pem", 'utf8');
//console.log(__dirname);

console.log("Private key is : ",prikey);
console.log("Public key is : ",pubkey);


