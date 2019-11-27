require('dotenv').config();

const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");




var command = process.argv[2];


var input = process.argv.slice(3).join(" ")


function doRandom(command, input) {
    switch (command) {
        case "concert-this":
            concert(input);
            break;
        case "spotify-this-song":
            spootify(input);
            break;
        case "movie-this":
            movie(input);
            break;
        case "do-what-it-says":
            doIt();
            break;
    }
}

function concert(input) {
    var artist = input;
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
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

function spootify(input) {
    
    if (!input) {
        input = "The Sign"
    };
    
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        }
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name + "\n");
        console.log("Song Title: " + data.tracks.items[0].name + "\n");
        console.log("Preview Link: " + data.tracks.items[0].href + "\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\n");

        
        var logSpotify =
            "======Spotify Start======" +
            "\nArtist(s): " + data.tracks.items[0].album.artists[0].name +
            "\nSong Title: " + data.tracks.items[0].name +
            "\nPreview Link: " + data.tracks.items[0].href +
            "\nAlbum: " + data.tracks.items[0].album.name +
            "\n======Spotify End======" + "\n\n";

        fs.appendFile("log.txt", logSpotify, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Spotify Logged");
            }
        })
    })
}

function movie(input) {
    var movieName = input
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    
    if (!movieName) {
        movieName = "Mr. Nobody"
    };

    
    axios.get(queryURL).then(response => {
        console.log("Title: " + response.data.Title + "\n");
        console.log("Release Year: " + response.data.Year + "\n");
        console.log("IMDB Rating: " + response.data.imdbRating + "\n");
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n");
        console.log("Country Produced: " + response.data.Country + "\n");
        console.log("Language: " + response.data.Language + "\n");
        console.log("Plot: " + response.data.Plot + "\n");
        console.log("Actors: " + response.data.Actors + "\n");

        
        var logMovie =
            "======Movie Start======" +
            "\nTitle: " + response.data.Title +
            "\nRelease Year: " + response.data.Year +
            "\nIMDB Rating: " + response.data.imdbRating +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
            "\nCountry Produced: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors +
            "\n======Movie End======" + "\n\n";

        fs.appendFile("log.txt", logMovie, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Movie Logged")
            }
        })
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    });
}

function doIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }
        dataArr = data.split(",");
        doRandom(dataArr[0], dataArr[1]);
    })
}

doRandom(command, input);