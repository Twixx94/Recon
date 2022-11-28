const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('<h3>Server connected !</h3>');
})

app.listen(3000, () =>{
    console.log('Port is listening');
})