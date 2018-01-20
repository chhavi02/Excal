
function initMap() {
	var uluru = {lat: -34.397, lng: 150.644};
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 10,
	center: uluru
   });

var marker = new google.maps.Marker({
    position: uluru,
    map: map
   });
	}
$('#findCentre').on('click', function(e){
	var centre = document.getElementById("centre").value;
	console.log(e);
	$.ajax({
		url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + centre + "&key= AIzaSyDW7MjMNbjibsp-tLFd9g9Ol-xc9NuIge4",
		type: "GET",
		dataType: "json",
		success: function( response ){
			console.log(response);

			var lati = response.results[0].geometry.location.lat;
		          	var long = response.results[0].geometry.location.lng;
		          	console.log('Lat: ' + lati);
		          	console.log('Long: ' + long);
		          	var location= {lat: lati, lng: long};
		          	var map = new google.maps.Map(document.getElementById('map'), {
			          zoom: 20,
			          center: location
			        });
			          var marker = new google.maps.Marker({
			        	position: location,
			        	map: map
			        });
			},
		error: function(error){
			console.log('the view duties page was not loaded', error);
		}
	});

})