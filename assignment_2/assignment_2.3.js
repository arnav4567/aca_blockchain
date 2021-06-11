//to see if decrypted and normal messages are verified
const readline = require('readline-sync');
var crypto = require('crypto');
//const path = require('path');
var fs = require('fs');

let pubkeypath = readline.question("Enter public key path : ");
var pubkey = fs.readFileSync(pubkeypath, 'utf8');

let nortext = readline.question("Enter the normal text : ");

let encryptext = readline.question("Enter the encrypted text : ");

function pubdec(message){
    //var decmsg = crypto.publicDecrypt({key: pubkey.toString(),passphrase: 'top secret'}, Buffer.from(message, 'utf8')).toString('base64');
    var decmsg = crypto.publicDecrypt(pubkey,Buffer.from(message, 'base64'));
    if(decmsg==nortext)
        return 1;
    return 0;
}
try{
    if(pubdec(encryptext)){
        console.log("Verified !");
    }
    else{
        console.log("Not verified");
    }
}
catch(err){
    console.log("Can't be decrypted !");//if a string which can't be decrypted is entered, an error will be thrown. In that case we display this.
}
finally {
    
}
