const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random/10', 
        {
            method: 'get'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          jokes = data.value;          
          jokes.forEach(element => {  console.log("- " + element.joke + "\n"); });
        });