var count = 0;

var stop = setInterval(function() {
	console.log('print hua\n', count);
	++count;
	if(count > 4) {
		clearInterval(stop);
	}
}, 1000);