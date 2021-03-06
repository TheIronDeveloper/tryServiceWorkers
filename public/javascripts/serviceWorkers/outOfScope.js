/**
 * Our service worker. Its important to note that this will fail, since the image requests are out of the scope of this
 * directory.
 */

self.addEventListener('install', function(event) {});
self.addEventListener('activate', function(event) {});

// Hijack the response
self.addEventListener('fetch', function(event) {

	/**
	 * The first time you load the page you'll see a Pichu. But, now that the serviceworker has been added, if you
	 * refresh the page you'll see a newly evolved pikachu! See what I did? Ha ha? :D ... ... :|
	 *
	 * If you hard refresh the page, it appears the cache gets cleared, and you'll see Pichu again.
	 */
	if (/\.png/.test(event.request.url)) {
		event.respondWith(
				fetch('/images/pikachu.png', {
					mode: 'no-cors'
				})
		);
	}
});