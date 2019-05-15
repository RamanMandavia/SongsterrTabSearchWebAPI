/* Data Storage */
const songtitle = document.getElementById("songtitle");
const artist = document.getElementById("artist");
const prefix = "rcm4155-";
const songtitleKey = prefix + "song";
const artistKey = prefix + "artist";

const storedSongTitle = localStorage.getItem(songtitleKey);
const storedArtist = localStorage.getItem(artistKey);

if (storedSongTitle){
	songtitle.value = storedSongTitle;
}else{
	songtitle.value = "";
}

if (storedArtist){
	artist.value = storedArtist;
}else{
	artist.value = "";
}

songtitle.onchange = e=>{ localStorage.setItem(songtitleKey, e.target.value); };

artist.onchange = e=>{ localStorage.setItem(artistKey, e.target.value); };
/* Data Storage */