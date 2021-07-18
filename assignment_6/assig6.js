const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 8787;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',(req,res)=>res.send('Post some data @ endpoint /hash to get its cryptographic hash')); //not required, just for clarity
app.get('/hash',(req,res)=>res.send('Nothing to \'get\' here ! You may post some data.'));

app.post('/hash', function(req,res){
    console.log("Data is : ",JSON.stringify(req.body));
    var hash = crypto.createHash('sha256').update(req.body.data).digest('hex');
    hash = hash.toString();
    res.json({'hash':hash});
    console.log(JSON.stringify({"hash":hash}),'\n');
})

app.listen(port, ()=>{
    console.log('Server is at localhost:',port,'\n');
})



