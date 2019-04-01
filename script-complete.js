const app = {};

app.getArists = (artist) => $.ajax({
	url: 'https://api.spotify.com/v1/search',
	method: 'GET',
	dataType: 'json',
	data: {
		type: 'artist',
		q: artist
	},
	headers: {Authorization: 'Bearer BQCyAGPlkzY6ZkKMYNqV4No9RJSBWzk6Sg5GSUPNk1Wyny7My9HznrpLSAaC6oo3OUfVb2iP8agj23Fpb7k0nOP27qqGAjl4t42FTWwN7XGDEGSdCxehcGacWHuPcu35oKWDqn7FotMuYzhE0VN6biEIYoEMeLLgQOgIalg4LAFYu4cQAg'},
});

app.getAristsAlbums = (id) => $.ajax({
	url: `https://api.spotify.com/v1/artists/${id}/albums`,
	method: 'GET',
	dataType: 'json',
	data: {
		album_type: 'album',
	},
	headers: {Authorization: 'Bearer BQCyAGPlkzY6ZkKMYNqV4No9RJSBWzk6Sg5GSUPNk1Wyny7My9HznrpLSAaC6oo3OUfVb2iP8agj23Fpb7k0nOP27qqGAjl4t42FTWwN7XGDEGSdCxehcGacWHuPcu35oKWDqn7FotMuYzhE0VN6biEIYoEMeLLgQOgIalg4LAFYu4cQAg'},
});

app.getAlbumTracks = (id) => $.ajax({
	url: `https://api.spotify.com/v1/albums/${id}/tracks`,
	method: 'GET',
	dataType: 'json',
	headers: {Authorization: 'Bearer BQCyAGPlkzY6ZkKMYNqV4No9RJSBWzk6Sg5GSUPNk1Wyny7My9HznrpLSAaC6oo3OUfVb2iP8agj23Fpb7k0nOP27qqGAjl4t42FTWwN7XGDEGSdCxehcGacWHuPcu35oKWDqn7FotMuYzhE0VN6biEIYoEMeLLgQOgIalg4LAFYu4cQAg'},
});

app.getAlbums = function(artists) {
	let albums = artists.map(artist => app.getAristsAlbums(artist.id));
	$.when(...albums)
		.then((...albums) => {
			let albumIds = albums
				.map(a => a[0].items)
				.reduce((prev,curr) => [...prev,...curr] ,[])
				.map(album => app.getAlbumTracks(album.id));
			console.log(albumIds);
			console.log(albums);
			console.log(artists);
			var pic = document.getElementById('pic');
			var pic1 = document.getElementById('pic1');
			var pic2 = document.getElementById('pic2');
	  		var x=artists[0].images[0].url;
	  		var y=artists[1].images[1].url;
	  		var z=artists[0].images[2].url;
	  		console.log(x);
	  		pic.innerHTML = '';
	  		pic1.innerHTML = '';
	  		pic2.innerHTML = '';
			var m= "<img src=\"";
			var n= "\"></img>";
			pic.innerHTML = m+x+n;
	  		pic1.innerHTML = m+y+n;
	  		pic2.innerHTML = m+z+n;
			app.getTracks(albumIds);
		});
};

app.getTracks = function(tracks) {
	$.when(...tracks)
		.then((...tracks) => {
			tracks = tracks
				.map(getDataObject)
				.reduce((prev,curr) => [...prev,...curr],[]);	
			const randomPlayList = getRandomTracks(50,tracks);
			app.createPlayList(randomPlayList);
				console.log(randomPlayList)
  		var Song1 = document.getElementById('Song1');
  		x=randomPlayList[0].name;
  		y=randomPlayList[0].disc_number;
  		z=randomPlayList[0].track_number;
  		a=randomPlayList[0].duration_ms;
  		a1=a/1000;
  		a2=Math.floor(a1/60);
  		a1=Math.floor(a1%60);
  		b=randomPlayList[0].external_urls.spotify;
  		c=randomPlayList[0].artists[0].name;
  		console.log(y)
  		Song1.innerHTML = '';
  		Song11.innerHTML = '';
  		Song111.innerHTML = '';
  		Song1111.innerHTML = '';
  		Song11111.innerHTML = '';
  		Song111111.innerHTML = '';
  		var m ="<h2 class=\"neon pink\">";
  		var n ="</h2>";
  		var o ="<h2 class=\"neon blue\">";
  		var p ="<h2 class=\"neon green\">";
  		var q ="Length: ";
  		var r =".";
  		var s ="Disc_Number: ";
  		var t ="Track_Number: ";
  		var u ="<a href=\""
  		var v ="\">To See the Song On Sotify</a>"
  		Song1.innerHTML=m+x+n;
  		Song11.innerHTML=o+c+n;
  		Song111.innerHTML=p+q+a2+r+a1+n;
  		Song1111.innerHTML=m+s+y+n;
  		Song11111.innerHTML=o+t+z+n;
  		Song111111.innerHTML=p+u+b+v+n;

var Song2 = document.getElementById('Song2');
  		x=randomPlayList[10].name;
  		y=randomPlayList[10].disc_number;
  		z=randomPlayList[10].track_number;
  		a=randomPlayList[10].duration_ms;
  		a1=a/1000;
  		a2=Math.floor(a1/60);
  		a1=Math.floor(a1%60);
  		b=randomPlayList[10].external_urls.spotify;
  		c=randomPlayList[10].artists[0].name;
  		console.log(y)
  		Song2.innerHTML = '';
  		Song22.innerHTML = '';
  		Song222.innerHTML = '';
  		Song2222.innerHTML = '';
  		Song22222.innerHTML = '';
  		Song222222.innerHTML = '';
  		var m ="<h2 class=\"neon pink\">";
  		var n ="</h2>";
  		var o ="<h2 class=\"neon blue\">";
  		var p ="<h2 class=\"neon green\">";
  		var q ="Length: ";
  		var r =".";
  		var s ="Disc_Number: ";
  		var t ="Track_Number: ";
  		var u ="<a href=\""
  		var v ="\">To See the Song On Sotify</a>\""
  		Song2.innerHTML=m+x+n;
  		Song22.innerHTML=o+c+n;
  		Song222.innerHTML=p+q+a2+r+a1+n;
  		Song2222.innerHTML=m+s+y+n;
  		Song22222.innerHTML=o+t+z+n;
  		Song222222.innerHTML=p+u+b+v+n;

var Song3 = document.getElementById('Song3');
  		x=randomPlayList[25].name;
  		y=randomPlayList[25].disc_number;
  		z=randomPlayList[25].track_number;
  		a=randomPlayList[25].duration_ms;
  		a1=a/1000;
  		a2=Math.floor(a1/60);
  		a1=Math.floor(a1%60);
  		b=randomPlayList[25].external_urls.spotify;
  		c=randomPlayList[25].artists[0].name;
  		console.log(y)
  		Song3.innerHTML = '';
  		Song33.innerHTML = '';
  		Song333.innerHTML = '';
  		Song3333.innerHTML = '';
  		Song33333.innerHTML = '';
  		Song333333.innerHTML = '';
  		var m ="<h2 class=\"neon pink\">";
  		var n ="</h2>";
  		var o ="<h2 class=\"neon blue\">";
  		var p ="<h2 class=\"neon green\">";
  		var q ="Length: ";
  		var r =".";
  		var s ="Disc_Number: ";
  		var t ="Track_Number: ";
  		var u ="<a href=\""
  		var v ="\">To See the Song On Sotify</a>\""
  		Song3.innerHTML=m+x+n;
  		Song33.innerHTML=o+c+n;
  		Song333.innerHTML=p+q+a2+r+a1+n;
  		Song3333.innerHTML=m+s+y+n;
  		Song33333.innerHTML=o+t+z+n;
  		Song333333.innerHTML=p+u+b+v+n;

  		var Song3 = document.getElementById('Song3');
  		y=randomPlayList[25].name;
  		console.log(y)
  		Song3.innerHTML = '';
  		var a ="<h2 class=\"neon green\">";
  		var b ="</h2>";
  		Song3.innerHTML=a+y+b;
		})
};

app.createPlayList = function(songs) {
	const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
	songs = songs.map(song => song.id).join(',');
	$('.loader').removeClass('show');
	$('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
	//<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3A122274160%3Aplaylist%3A488mdwVfwEv3OVWGuZgonG" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
}

app.init = function() {
	$('form').on('submit', function(e) {
		e.preventDefault();
		let artists = $('input[type=search]').val();
		$('.loader').addClass('show');
		artists = artists
			.split(',')
			.map(app.getArists);
		
		$.when(...artists)
			.then((...artists) => {
				artists = artists.map(a => a[0].artists.items[0]);
				console.log(artists);
				app.getAlbums(artists);
			});
	});

}

const getDataObject = arr => arr[0].items;

function getRandomTracks(num, tracks) {
	const randomResults = [];
	for(let i = 0; i < num; i++) {
		randomResults.push(tracks[ Math.floor(Math.random() * tracks.length) ])
	}
	return randomResults;
}

$(app.init);