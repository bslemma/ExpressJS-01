const express=require('express');
const axios=require('axios');
const { from }=require('rxjs');
var port=3000;
var app=new express();

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.set('strict routing',true);

app.get('/users',(req,res)=>{
    
    //1. Using Promises
    axios.get('http://jsonplaceholder.typicode.com/users/').then(function(data){
        res.send(data.data);
    }).catch(err=>{
        console.log('Error : ',err);
    })

    //2. Using Reactive Programming(Observables)
    // const myPromise=axios.get('http://jsonplaceholder.typicode.com/users/');
    // const myObservable=from(myPromise);
    // myObservable.subscribe((obs)=>{
    //     res.send(obs.data);
    // })

    //3. Using Async/Await
    /*async function myFunc(){
        try{
            const result=await axios.get('http://jsonplaceholder.typicode.com/users/');
            res.send(result.data);
        }catch(err){
            console.log('Error :',err);
        }
    }
    myFunc();*/

});

app.listen(port,function(){
    console.log('The sever is running on port %s',port);
})