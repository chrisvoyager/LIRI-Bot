require('dotenv').config();

const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");




var command = process.argv[2];


var input = process.argv.slice(3).join(" ")



function concert(input) {
    var artist = input;
    var queryURL = "https:
    
    axios.get(queryURL).then(response => {
        console.log("Venu: " + response.data[0].venue.name + "\n");
        console.log("Location: " + response.data[0].venue.city + "\n");
        console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\n");

        
        var logConcert =
            "======Concert Start======" +
            "\nArtist(s): " + artist +
            "\nVenue: " + response.data[0].venue.name +
            "\nLocation: " + response.data[0].venue.city +
            "\n Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") +
            "\n======Concert End======" + "\n\n";

        fs.appendFile("log.txt", logConcert, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Concert Logged")
            }
        })
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    });
};

