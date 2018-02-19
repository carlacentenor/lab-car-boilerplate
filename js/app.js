// La funcionalidad de tu proyecto
var origin = document.getElementById('start');
var destiny = document.getElementById('end');

function initMap() {
 
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  initAutocomplete();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: -12.020651498087096, 
      lng: -76.93456887128904}
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('search').addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: origin.value,
    destination: destiny.value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Ingrese direcciones');
    }
  });
}

function initAutocomplete() {
  let autocompleteorigin = new google.maps.places.Autocomplete(origin);
  let autocompleteDestiny = new google.maps.places.Autocomplete(destiny);
}

