"use strict";

/* Loading all necessary functions */
window.onload = (e) => {
    document.querySelector("#searchTitle").onclick = getDataTitle;
    document.querySelector("#searchArtist").onclick = getDataArtist;
    document.querySelector("#topTabs").onclick = setDataTop;
    document.querySelector("#randomSong").onclick = setDataSong;
    document.querySelector("#randomArtist").onclick = setDataArtist;
};
/* Loading all necessary functions */
	

/* Search Using Title */
let displayTerm = "";
	
function getDataTitle(){
    let songsterr_url_title = "https://www.songsterr.com/a/ra/songs.json?pattern=";
    
    let searchTitle = document.querySelector("#songtitle").value;
    displayTerm = searchTitle;
    
    searchTitle = searchTitle.trim();
    
    searchTitle = encodeURIComponent(searchTitle);
    
    if(searchTitle.length < 1)
        {
            document.querySelector("#result").innerHTML = "<p>No Entry</p>";
            return;
        }
    
    songsterr_url_title += searchTitle;
    
    document.querySelector("#result").innerHTML = "<b>Searching for " + displayTerm + "</b>";
    
    $.ajax({
       dataType: "json",
        url: songsterr_url_title,
        data: null,
        success: jsonLoadedTitle
    });
    
    $("#result").fadeOut(100);
}

function jsonLoadedTitle(obj){
    console.log("obj = " + obj);
    console.log("obj stringified = " + JSON.stringify(obj));
    
    if(!obj || obj.length == 0){
            document.querySelector("#result").innerHTML = "<p><i>No tab found for " + displayTerm + "</i></p>";
            $("#result").fadeIn(500);
            return;
        }
    
    let songIndex = obj[0].id;
    
    let returnURL = "https://www.songsterr.com/a/wa/song?id=";
    returnURL += songIndex;
    
    let finalString = "<p><a href='" + returnURL + "' id='toplink'>" + displayTerm + "</a></p>";
    
    document.querySelector("#result").innerHTML = finalString;
    
    $("#result").fadeIn(500);
    
    if(document.querySelector("#autoload").checked)
        document.querySelector("#toplink").onclick = window.open(returnURL, "_blank");
}
/* Search Using Title */


/* Search Using Artist */
function getDataArtist(){
    let songsterr_url_artist = "https://www.songsterr.com/a/ra/songs.json?pattern=";
    
    let artist = document.querySelector("#artist").value;
    displayTerm = artist;
    
    artist = artist.trim();
    
    artist = encodeURIComponent(artist);
    
    if(artist.length < 1)
        {
            document.querySelector("#result").innerHTML = "<p>No Entry</p>";
            return;
        }
    
    songsterr_url_artist += artist;
    
    document.querySelector("#result").innerHTML = "<b>Searching for " + displayTerm + "</b>";
    
    $.ajax({
       dataType: "json",
        url: songsterr_url_artist,
        data: null,
        success: jsonLoadedArtist
    });
    
    $("#result").fadeOut(100);
}

function jsonLoadedArtist(obj){
    console.log("obj = " + obj);
    console.log("obj stringified = " + JSON.stringify(obj));
    
    if(!obj || obj.length == 0){
            document.querySelector("#result").innerHTML = "<p><i>No tab found for " + displayTerm + "</i></p>";
            $("#result").fadeIn(500);
            return;
        }
    
    let artistIndex = obj[0].artist.id;
    
    console.log(artistIndex);
    
    let returnURL = "https://www.songsterr.com/a/wa/artist?id=";
    returnURL += artistIndex;
    
    let finalString = "<p><a href='" + returnURL + "' id='toplink'>" + displayTerm + "</a></p>";
    
    document.querySelector("#result").innerHTML = finalString;
    
    $("#result").fadeIn(500);
    
    if(document.querySelector("#autoload").checked)
        document.querySelector("#toplink").onclick = window.open(returnURL, "_blank");
}
/* Search Using Artist */


/* Top Songs Search */
function setDataTop(){
    let link = "<p><a href='https://www.songsterr.com/a/wa/search' id='toplink'>Top Songs/Tabs</a></p>";
    
    document.querySelector("#result").innerHTML = link;
    if(document.querySelector("#autoload").checked)
        document.querySelector("#toplink").onclick = window.open("https://www.songsterr.com/a/wa/search", "_blank");
}
/* Top Songs Search */


/* Random Song Button */
let randomSongChoices = ["Fade To Black", "One", "Widowmaker", "Twilight Of The Thunder God", "One Last Breath", "Blackbird", "Keelhauled", "Conquer or Die", "Slaughter of the Soul", "Hurt", "Wonderwall", "Annihilation Of The Wicked", "Tornado Of Souls", "Got The Time", "World War Now", "Left Hand Path", "Hotel California", "Angel Of Death", "Electric Funeral", "Painkiller"];

function setDataSong(){
    let indexSong = Math.floor(Math.random() * randomSongChoices.length);
    
    document.querySelector("#songtitle").value = randomSongChoices[indexSong];
}
/* Random Song Button */


/* Random Artist Button */
let randomArtistChoices = ["Judas Priest", "Iron Maiden", "Johnny Cash", "Cranberries", "In Flames", "Amon Amarth", "Metallica", "Megadeth", "Slayer", "Red Hot Chili Peppers", "Overkill", "Kreator", "Disturbed", "Alter Bridge", "Angra", "Anthrax"];

function setDataArtist(){
    let indexArtist = Math.floor(Math.random() * randomArtistChoices.length);
    
    document.querySelector("#artist").value = randomArtistChoices[indexArtist];
}
/* Random Artist Button */