
/*var http=require("http");
http.createServer(function(req,res){
var body='this is running of response';
var content_length=body.length;
res.writeHead(200,{
    'Content-Type':'text/plain',
    'Content_Length':content_length
});
res.end(body);
}).listen(3000);*/
//console.log(__dirname);
/*
var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+'sec have passed');
    if(time>7)
    {

        clearInterval(timer);
    }
},2000

);*/
var http=require("http");
var fs= require('fs');
var readStream = fs.createReadStream('Sample.txt','utf8');
//var writeStream = fs.createWriteStream('write_file.txt');
/*
readStream.on('data',function(chunk){
    console.log('-------------------------------------');
    writeStream.write(chunk);
    console.log(chunk); 
})
readStream.on('end',function(chunk){
    console.log('--------------END-----------------------');
})*/
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type':'application/json'}
    );
var jsonObj=[{
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/44/",
            "https://swapi.co/api/vehicles/46/"
        ],
        "starships": [
            "https://swapi.co/api/starships/59/",
            "https://swapi.co/api/starships/65/",
            "https://swapi.co/api/starships/39/"
        ],
        "created": "2014-12-10T16:20:44.310000Z",
        "edited": "2014-12-20T21:17:50.327000Z",
        "url": "https://swapi.co/api/people/11/"
    },
    {
        "name": "Wilhuff Tarkin",
        "height": "180",
        "mass": "unknown",
        "hair_color": "auburn, grey",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "64BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/21/",
        "films": [
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T16:26:56.138000Z",
        "edited": "2014-12-20T21:17:50.330000Z",
        "url": "https://swapi.co/api/people/12/"
    },
    {
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/14/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/3/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/19/"
        ],
        "starships": [
            "https://swapi.co/api/starships/10/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-10T16:42:45.066000Z",
        "edited": "2014-12-20T21:17:50.332000Z",
        "url": "https://swapi.co/api/people/13/"
    },
    {
        "name": "Han Solo",
        "height": "180",
        "mass": "80",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "29BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/22/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [],
        "starships": [
            "https://swapi.co/api/starships/10/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-10T16:49:14.582000Z",
        "edited": "2014-12-20T21:17:50.334000Z",
        "url": "https://swapi.co/api/people/14/"
    },
    {
        "name": "Greedo",
        "height": "173",
        "mass": "74",
        "hair_color": "n/a",
        "skin_color": "green",
        "eye_color": "black",
        "birth_year": "44BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/23/",
        "films": [
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/4/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T17:03:30.334000Z",
        "edited": "2014-12-20T21:17:50.336000Z",
        "url": "https://swapi.co/api/people/15/"
    },
    {
        "name": "Jabba Desilijic Tiure",
        "height": "175",
        "mass": "1358",
        "hair_color": "n/a",
        "skin_color": "green-tan, brown",
        "eye_color": "orange",
        "birth_year": "600BBY",
        "gender": "hermaphrodite",
        "homeworld": "https://swapi.co/api/planets/24/",
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/5/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T17:11:31.638000Z",
        "edited": "2014-12-20T21:17:50.338000Z",
        "url": "https://swapi.co/api/people/16/"
    },
    {
        "name": "Wedge Antilles",
        "height": "170",
        "mass": "77",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "hazel",
        "birth_year": "21BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/22/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/14/"
        ],
        "starships": [
            "https://swapi.co/api/starships/12/"
        ],
        "created": "2014-12-12T11:08:06.469000Z",
        "edited": "2014-12-20T21:17:50.341000Z",
        "url": "https://swapi.co/api/people/18/"
    },
    {
        "name": "Jek Tono Porkins",
        "height": "180",
        "mass": "110",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/26/",
        "films": [
            "https://swapi.co/api/films/1/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [],
        "starships": [
            "https://swapi.co/api/starships/12/"
        ],
        "created": "2014-12-12T11:16:56.569000Z",
        "edited": "2014-12-20T21:17:50.343000Z",
        "url": "https://swapi.co/api/people/19/"
    },
    {
        "name": "Yoda",
        "height": "66",
        "mass": "17",
        "hair_color": "white",
        "skin_color": "green",
        "eye_color": "brown",
        "birth_year": "896BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/28/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "species": [
            "https://swapi.co/api/species/6/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:26:01.042000Z",
        "edited": "2014-12-20T21:17:50.345000Z",
        "url": "https://swapi.co/api/people/20/"
    },
    {
        "name": "Palpatine",
        "height": "170",
        "mass": "75",
        "hair_color": "grey",
        "skin_color": "pale",
        "eye_color": "yellow",
        "birth_year": "82BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/8/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:48:05.971000Z",
        "edited": "2014-12-20T21:17:50.347000Z",
        "url": "https://swapi.co/api/people/21/"
    }];
res.end(JSON.stringify(jsonObj));
}).listen(3000);