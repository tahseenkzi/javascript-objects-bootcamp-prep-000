var playlist = { 'Drake' : 'Forever' };

function updatePlaylist(playlist, artist, song){
  return object.assign({}, playlist, {artist : [song]});
}

