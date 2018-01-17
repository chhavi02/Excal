var map;
function initMap() {
	var uluru = {lat: -34.397, lng: 150.644};
	map = new google.maps.Map(document.getElementById('map'), {
	zoom: 10,
	center: uluru
   });

var marker = new google.maps.Marker({
    position: uluru,
    map: map
   });
	}
