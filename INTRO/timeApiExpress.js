const express = require('express');
const app = express();
app.listen(8080);


app.get('/',function(request,response){
    response.setHeader('Content-Type','text/html');
    response.send('<strong> Hello, I am the time API </strong>');
});


app.get('/time',function(request,response){
    dateNow = new Date();

    // let heure =('0'+dateNow.getHours()).slice(-2);
    // let minute =('0'+dateNow.getMinutes()).slice(-2);
    // let seconde =('0'+dateNow.getSeconds()).slice(-2);
    // let time = heure + ':'+minute+':'+seconde;

    let time = {
        hours : dateNow.getHours(),
        minutes : dateNow.getMinutes(),
        seconds : dateNow.getSeconds()
  
    }

    response.setHeader('Content-Type','text/html');
    response.send(time);
});

app.get('/date',function(request,response){
    dateNow = new Date();


    let date = {
        day : dateNow.getDate(),
        month : dateNow.getMonth()+1,
        year : dateNow.getFullYear()
  
    }

    response.send(date);
});

app.get('/dayeBeforeOG',function(request,response){
    let dateGo = new Date(2024, 6, 27);
    let dateNow = new Date();
    
    let differenceEnMilliSecondes = dateGo - dateNow;
    let differenceEnJour = differenceEnMilliSecondes / (1000*60*60*24);
    let days = {
        days : Math.trunc(differenceEnJour)
    }
    response.send(days);
   
});
