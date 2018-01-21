var firebase = require('firebase-app');
var request = require('request');
var tokenSent = false;
function isTokenSentToServer(sent) {
	return tokenSent;
}
function setTokenSentToServer(sent) {
	tokenSent = sent;
}
function initializeNotificationsInClient() {
	const messaging = firebase.messaging();
	console.log('requesting for permission to send message');
	messaging.requestPermissions().then(() => {
		console.log('permission granted');
		// TODO(developer): Retrieve an Instance ID token for use with FCM. No idea how to BTW :p
		messaging.getToken().then((currentToken) => {
			sendTokenToServer(currentToken);
		}).catch((err) => {
			console.log('error while receiving the token', err);
		});
	}).catch(() => {
			console.log('permission denied');
	});
	messaging.onTokenRefresh(() => {
		messaging.getToken().then((currentToken) => {
			setTokenSentToServer(false);
			sendTokenToServer(currentToken);
		}).catch(() => {
			console.log('error while receiving the token', err);
		});
	});
	message.onMessage((message) => {
		console.log('message received', message);
	});
}
function sendTokenToServer(token) {
	if(!isTokenSentToServer()) {
		console.log('sending token');
		request.post('/').form({
			'token': token,
			'username': username
		});
	}
	else {
		console.log('already sent');
	}
}
module.exports = initializeNotificationsInClient;
