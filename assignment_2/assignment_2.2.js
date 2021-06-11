//encrypting a text
const readline = require('readline-sync');
var crypto = require('crypto');
//const path = require('path');
var fs = require('fs');

let prikeypath = readline.question("Enter private key path : ");
var prikey = fs.readFileSync(prikeypath, 'utf8');

let nortext = readline.question("Enter the normal text : ");

console.log("Original msg is : "+nortext);

function privenc(message){
   var encmsg = crypto.privateEncrypt({key: prikey.toString(),passphrase: 'top secret'}, Buffer.from(message, 'utf8')).toString('base64');
   console.log("Encrypted with private key : " + encmsg);
}

privenc(nortext);
