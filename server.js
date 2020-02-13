const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});


app.post('/', function(req, res){
    let city = req.body.city;
    if(city === "Tallinn") {
        request(`https://api.openweathermap.org/data/2.5/weather?id=862995&units=metric&appid=c4093859723960deb37fe0a6a1132608`, function(error, response, body){
            let data = JSON.parse(response.body);
            temp = data.main.temp;
            disc = data.weather.description;
            res.write("City: Tallinn ")
            res.write("Temperature: " +temp)
            res.send();
        });        
    }
    if(city === "Tartu") {
        request(`https://api.openweathermap.org/data/2.5/weather?id=588335&units=metric&appid=c4093859723960deb37fe0a6a1132608`, function(error, response, body){
            let data = JSON.parse(response.body);
            temp = data.main.temp;
            disc = data.weather.description;
            res.write("City: Tartu ")
            res.write("Temperature: " +temp)
            res.send();
        });        
    }
    if(city === "Pärnu") {
        request(`https://api.openweathermap.org/data/2.5/weather?id=589580&units=metric&appid=c4093859723960deb37fe0a6a1132608`, function(error, response, body){
            let data = JSON.parse(response.body);
            temp = data.main.temp;
            disc = data.weather.description;
            res.write("City: Pärnu ")
            res.write("Temperature: " +temp)
            res.send();
        });        
    }
});


app.listen(3000, function(){
    console.log("Server started in port 3000");
});