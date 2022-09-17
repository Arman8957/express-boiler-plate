const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// pages routing sections 

app.get('/', (req, res)=> {
   res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res)=> {
     var num1 = req.body.num1;
     var num2 = req.body.num2;
     var result = num1 + num2;
    
    res.send('yeah your right ' + result);
    
})

app.get('/emi', (req, res)=> {
   res.sendFile(__dirname + '/emi.html')
});

app.post('/emi', (req, res)=> {
    res.send('Okay : ');
})

// don't touch, this is danger
app.listen(3000, ()=> {
    console.log('server listening')
});
