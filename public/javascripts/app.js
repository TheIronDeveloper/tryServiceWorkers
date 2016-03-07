
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/imageReplace.js', {
		scope: '/'
	}).then(function(reg) {
		console.log('Yey!', reg);
	}).catch(function(err) {
		console.log('Boo!', err);
	});
}