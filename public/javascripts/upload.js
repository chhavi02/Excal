(function(d, $) {
	var DOM = {
		video: $('#video'),
		canvas: $('#canvas'),
		photo: $('#photo'),
		startbutton: $('#startbutton')
	},
	Functions = {
		startup: function() {
			console.log('Starting');
			navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			})
			.then(function(stream) {
				console.log('streaming');
				DOM.video.srcObject = stream;
				// DOM.video.get(0).play();
				d.getElementById('video').play();
			})
			.catch(function(error) {
				console.log('Error: ', error);
			});
	/*		DOM.video.on('canplay', function(event) {
				console.log('Can play!');
				if(!Variables.streaming) {
					Variables.height = DOM.video.videoHeight / (DOM.video.videoWidth / Variables.width);

					DOM.video.setAttribute('width', Variables.width);
					DOM.video.setAttribute('height', Variables.height);

					DOM.canvas.setAttribute('width', Variables.width);
					DOM.canvas.setAttribute('height', Variables.height);
					Variables.streaming = true;
				}
			});*/
			console.log('here');
			/*d.getElementById('video').addEventListener('canplay', function(ev){
				console.log('Can play!');
				if(!Variables.streaming) {
					Variables.height = DOM.video.videoHeight / (DOM.video.videoWidth / Variables.width);

					DOM.video.setAttribute('width', Variables.width);
					DOM.video.setAttribute('height', Variables.height);

					DOM.canvas.setAttribute('width', Variables.width);
					DOM.canvas.setAttribute('height', Variables.height);
					Variables.streaming = true;
				}
		    }, false);

			DOM.startbutton.on('click', function(event) {
				Functions.takepicture();
				event.preventDefault();
			});*/

			Functions.clearphoto();
		},
		clearphoto: function() {
			// var context = DOM.canvas[0].getContext('2d');
			// var context = $('#canvas').getContext('2d');
			var context = d.getElementById('canvas').getContext('2d');
			context.fillStyle = '#AAA';
			context.fillRect(0, 0, DOM.canvas.width, DOM.canvas.height);

			var data = canvas.toDataURL('image/png');
			DOM.photo.attr('src', data);
		},
		takepicture: function() {
			// var context = DOM.canvas[0].getContext('2d');
			var context = d.getElementById('canvas').getContext('2d');
			if(Variables.width && Variables.height) {
				DOM.canvas.width = Variables.width;
				DOM.canvas.height = Variables.height;
				context.drawImage(DOM.video, 0, 0, Variables.width, Variables.height);

				var data = DOM.canvas.toDataURL('iamge/png');
				DOM.photo.attr('src', data);
			} else {
				Functions.clearphoto();
			}
		}
	},
	Variables = {
		width: 320,
		height: 0,
		streaming: false
	};

	$(document).ready(function() {
		console.log('Document loaded!');
		d.getElementById('video').addEventListener('canplay', function(ev){
				console.log('Can play!');
				if(!Variables.streaming) {
					Variables.height = DOM.video.videoHeight / (DOM.video.videoWidth / Variables.width);

					DOM.video.setAttribute('width', Variables.width);
					DOM.video.setAttribute('height', Variables.height);

					DOM.canvas.setAttribute('width', Variables.width);
					DOM.canvas.setAttribute('height', Variables.height);
					Variables.streaming = true;
				}
		    }, false);

			DOM.startbutton.on('click', function(event) {
				Functions.takepicture();
				event.preventDefault();
			});
		Functions.startup();
	});
})(document, jQuery);