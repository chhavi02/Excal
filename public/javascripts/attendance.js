(function($) {
	var lat;
	var long;

	var width = 320;
	var height = 0;
	var testData;
	var streaming = false;
	var video = null;
	var canvas = null;
	var photo = new Array(10);
	var startbutton = null;

	function startup() {
		video = document.getElementById('video');
		canvas = document.getElementById('canvas');
		for(var i = 1; i <= 5; i++) {
			photo[i] = document.getElementById('photo' + i);
		}
		startbutton = document.getElementById('startbutton');

		navigator.mediaDevices.getUserMedia({video: true, audio: false})
			.then(function(stream) {
				video.srcObject = stream;
				video.play();
			})
			.catch(function(err) {
				console.log('Error: ', err);
			});

		video.addEventListener('canplay', function(event) {
			if(!streaming) {
				height = video.videoHeight / (video.videoWidth / width);

				video.setAttribute('width', width);
				video.setAttribute('height', height);
				canvas.setAttribute('width', width);
				canvas.setAttribute('height', height);
				streaming = true;
			}
		}, false);

		startbutton.addEventListener('click', function(event) {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					lat = position.coords.latitude;
					long = position.coords.longitude;
					alert('allaha hu akbar');
					takepicture();
				})
			}
			event.preventDefault();
		}, false);

		clearphoto();
	}

	function clearphoto() {
		var context = canvas.getContext('2d');
		context.fillStyle = '#AAA';
		context.fillRect(0, 0, canvas.width, canvas.height);

		var data = canvas.toDataURL('image/jpeg');
		for (var i = 1; i <= 5; i++) {
			// photo[i].setAttribute('src', data);
			photo[i] = data;
		}
	}

	function takepicture() {
		console.log('asdlkjfgkasdjfgujasdf');
		var context = canvas.getContext('2d');
		if(width && height) {
			canvas.width = width;
			canvas.height = height;
			var count = 1;
			var data;
			var stop = setInterval(function() {
				context.drawImage(video, 0, 0, width, height);
				testData = data = canvas.toDataURL('image/jpeg');
				// photo[count].setAttribute('src', data);
				photo[count] = data;
				console.log('le rahe hain.');
				++count;
				if(count > 5) {
					clearInterval(stop);
					processImage();
				}
			}, 1000);
		} else {
			clearphoto();
		}
	}

	function showPosition(position) {
		console.log('HERE');
				lat = position.coords.latitude;
				long = position.coords.longitude;
				console.log(lat, ' ', long);
		/*		$.ajax({
					type: 'post',
					url: '/attendance',
					data: {
						photos: photo,
						position: {
							latitude: lat,
							longitude: long
						}
					},
					success: function(responseData, status, xhr) {
						alert('asdfasdfdasdsv');
					},
					error: function(res, status, xhr) {
						alert('mc error');
					}
				});*/
				// return;
	}

	function processImage() {
	    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log(lat);
// AJAX request to set lat, long and photos array;
    	} else {
        	console.log("Geolocation is not supported by this browser.");
	    }
	    // console.log(photo);

	}

	$(document).ready(function() {
		startup();
	})
})(jQuery);