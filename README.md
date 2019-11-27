# LIRI-Bot

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
```
concert-this 
```
```
spotify-this-song
```
```
movie-this
```
```
do-what-it-says
```
## Technologies used:

* Node.js
* Javascript

## npm packages: 
* [spotify](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* [bands-in-town](https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0) - Bands In Town API that connects you to its library of concerts nearby.
* [OMDB](http://www.omdbapi.com/) - OMDB API that connects you to its library of movies.

## How to Run LIRI-Bot

<img src="images/how-to.gif">

* Step One: node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

* Step Two: node liri spotify-this-song ```<song name here>```.
	
	This will show the following information about the song in your terminal/bash window: 
	* Artist(s) 
	* The song's name 
	* A preview link of the song from Spotify 
	* The album that the song is from

	If no song is provided then the program will default to
	"Gotta Go" by Chung Ha

* Step Three: node liri.js movie-this ```<movie name here>```.
	
	This will output the following information to your terminal/bash window:
	* Title of the movie.
	* Year the movie came out.
	* IMDB Rating of the movie.
	* Country where the movie was produced.
	* Language of the movie.
	* Plot of the movie.
	* Actors in the movie.
	* Rotten Tomatoes Rating.
	* Rotten Tomatoes URL.
	
	If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'

* Step Four: node liri.js do-what-it-says

	This will output the command placed in random.txt file
