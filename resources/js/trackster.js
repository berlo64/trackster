$(document).ready(function() {

$("#search-box").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#search-button").click();
    }
});

$('#search-button').click(function() {
  $('#song-info').empty();
  Trackster.searchTracksByTitle($('#search-box').val());
  $('#search-box').val('');
});

const API_KEY = '10cfca331864a8701bf08a33d7a722cb';

var Trackster = {}

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  for (var i = 0; i < tracks.length; i++) {
    var mediumAlbumArt = tracks[i].image[1]["#text"];
    var htmlRowTrack = '<div class="row song-data">' +
      '<div class="play-button col-md-1 offset-md-1">' +
        '<a href="' + tracks[i].url + '" target="_blank">' +
          '<i class="fa fa-play-circle-o fa-lg"></i>' +
        '</a>' +
      '</div>' +
      '<div class="data song-name col-md-2">' +
        '<span>' + tracks[i].name + '</span>' +
      '</div>' +
      '<div class="data artist-name col-md-2 offset-md-1">' +
        '<span>' + tracks[i].artist + '</span>' +
      '</div>' +
      '<div class="data album-name col-md-1 offset-md-1">' +
        '<div>' +
          '<img src="' + mediumAlbumArt + '" alt="Album Cover">' +
        '</div>' +
      '</div>' +
      '<div class="data listeners-num col-md-1 offset-md-1">' +
        '<span>' + tracks[i].listeners + '</span>' +
      '</div>' +
    '</div>';
    $('#song-info').append(htmlRowTrack);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(results) {
      Trackster.renderTracks(results.results.trackmatches.track);
      console.log(results.results.trackmatches.track);
    }
  });
};

});
