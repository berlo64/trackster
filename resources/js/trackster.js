$(document).ready(function() {

const API_KEY = '10cfca331864a8701bf08a33d7a722cb';

var Trackster = $('#search-button').click(function() {
  Trackster.searchTracksByTitle($('#search-box').val());
});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(results) {
      console.log(results);
    }
  });
};

});
