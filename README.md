# Spotify
Generates and Embeds Random songs from multiple artists separated by commas into the web page also picks up certain details of the song and displays it onto the screen for the user to view 
You will hav to go to the link https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset= and generate an authentication token by logging into your own account and replace it into the scrip-complete.js replace the text after "headers: {Authorization:" this in three seperate places such that the user is able to be authenticated before connecting to the spotify api
Now In the Search bar 2 artists Names can be give Eg: Halsey,Chaismokers and it pick 3 random songs of either of the artists and will display it to you on the current webpageand it will also have a link to the spotify page where you could go and listen to the song.
The orange Box that is obtained on the embeded random playlist is because While embeding this needs greater degree of authentication details so it becomes difficult for it to ping back the same page and therfore it does not work Here Properly
Also the main logic how the program works is that it It gets Multiple Artists Names as an input from the user which are comma seperated and using those names it sends a request to the api and gets an array of albums from the artists.It the Picks out any random Albums from the selected Artists and then fetches all the songs present within and then picks random ones and generates a random playlist having various details about the songs that have been picked
It is a custom UI designed for viewing the songs that have been randomly picked It also happens to has a link to the spotify page where a user can go and listen to the Song being displayed on the webpage
