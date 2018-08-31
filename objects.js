var playlist = { artist : song };

function updatePlaylist(playlist, artist, song){
  object.assign({}, playlist, {artist : [song]});
}

