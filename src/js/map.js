var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.910349, lng: 27.561438}, 
    zoom: 15
  });
}