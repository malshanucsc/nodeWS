const express = require('express');

const app = express();

app.listen(8000, ()=>{
    console.log("server running");
});

app.get('/', (req, res)=>{

    res.send("hello world");

});
app.get('/id', (req, res) => {
    res.send('1');

});

app.get('/price', (req, res) => {
    res.send('100');
})