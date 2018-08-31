var playlist = { 'Drake' : 'Forever' };

function updatePlaylist(playlist, artist, song){
  object.assign({}, playlist, {artist : [song]});
}

