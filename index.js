const express=require('express');

// Set up express app
const app=express();

app.get('/',function(req,res){
    console.log('blank GET request');
    res.send('test');
});

app.get('/jerome',function(req,res){
    console.log('jerome');
    res.end();
});

app.get('/api',function(req,res){
    res.send('reply for api');
});

app.get('/apijson',function(req,res){
    res.send({name:'jerome',contact:'12312312'});
});

app.get('/apimul',function(req,res){
    res.send([{name:'jerome',contact:'12312312'},{address:'#####',contact:'12312312'}]);
});

app.get('/apimul',function(req,res){
    res.json([{name:'jerome',contact:'12312312'},{name:'#####',contact:'0777124124'}]);
});

// listen for request
app.listen(process.env.port || 5500,function(){
    console.log('App is listening')
})