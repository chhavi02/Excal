(function($) {
	var width = 320;
	var height = 0;
	var testData;
	var streaming = false;
	var video = null;
	var canvas = null;
	var photo = new Array(10);
	// var photo = null;
	var startbutton = null;

	function startup() {
		video = document.getElementById('video');
		canvas = document.getElementById('canvas');
		for(var i = 1; i <= 5; i++) {
			photo[i] = document.getElementById('photo' + i);
		}
		// photo = document.getElementById('photo1');
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
			takepicture();
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
			photo[i].setAttribute('src', data);
		}
	}

	function takepicture() {
		var context = canvas.getContext('2d');
		if(width && height) {
			canvas.width = width;
			canvas.height = height;
			var count = 1;
			var data;
			console.log('peeche');
			var stop = setInterval(function() {
				context.drawImage(video, 0, 0, width, height);
				testData = data = canvas.toDataURL('image/jpeg');
				photo[count].setAttribute('src', data);
				++count;
				console.log('andar');
				if(count > 5) {
					console.log('over');
					clearInterval(stop);
					console.log('here');
					processImage();
				}
			}, 1000);
			console.log('aage')

		} else {
			alert('Allah hu akbar');
			clearphoto();
		}
	}

/*	function makeBlob(dataURL) {
		 var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = decodeURIComponent(parts[1]);
                return new Blob([raw], { type: contentType });
            }
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;

            var uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            return new Blob([uInt8Array], { type: contentType });
	}
*/
	   function processImage() {
	   	console.log('Processing image');
	   	console.log('test Data: ', testData);
        var subscriptionKey = "77cd37fb881c431f84b924d27b87169e";

        var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

        // Request parameters.
        var params = {
            "returnFaceId": "true",
            "returnFaceLandmarks": "false",
            "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
        };

        // Display the image.
        var sourceImage = document.getElementById("photo1");
        // document.querySelector("#sourceImage").src = sourceImageUrl;

        // Perform the REST API call.
        $.ajax({
            url: uriBase + "?" + $.param(params),

            // Request headers.
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
            },

            type: "POST",

            // Request body.
            // data: '{"url": ' + '"' + sourceImage + '"}',
            data: {"url": '"' + testData + '"'},
        })

        .done(function(data) {
            // Show formatted JSON on webpage.
            // $("#responseTextArea").val(JSON.stringify(data, null, 2));
            console.log(JSON.stringify(data, null, 2));
        })

        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ? 
                jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });
    };

	window.addEventListener('load', startup, false);
})(jQuery);