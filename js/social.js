(function() {

	window.onload = function() {
		var btnTw = document.getElementById("twitter-btn");
		var btnFb = document.getElementById("facebook-btn");
		var metatags = document.getElementsByTagName("meta");
                var soCont = document.getElementById("share-cnt");
		var shareurl = '';
		soCont.onclick = socialShare();

		//return false;


		function getMetaTagInfo(tag) {
			for (metatags, a = 0; a < metatags.length; a++) {
				if (tag == metatags[a].name || tag == metatags[a].getAttribute("property")) {
					return metatags[a].content;
				}
			}
			return false;
		}


		btnFb.onclick = function facebookopen() {
			FB.ui({
				method: 'feed',
				link: getMetaTagInfo("og:url"),
				picture: getMetaTagInfo("og:image"),
				name: getMetaTagInfo("og:title"),
				caption: '',
				description: getMetaTagInfo("og:description")
			});
		};
		btnTw.onclick = function twitteropen() {
			description = 'Take a look at this ';
			shareurl = 'https://twitter.com/intent/tweet?text=' + encodeURI(description) + '&url=http://www.discoveryvip.com';
			window.open(shareurl, 'Share window', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		};


		function socialShare(socialnetwork) {
			console.log(socialnetwork);
			//
			var url = getMetaTagInfo("og:url"); //'http://www.discoveryvip.com/'; //window.location.href;
			var title = getMetaTagInfo("og:title");
			var description = getMetaTagInfo("og:description");
			var image = getMetaTagInfo("og:image");
			switch (socialnetwork) {
				case 'twitter':
					shareurl = 'https://twitter.com/intent/tweet?text=this%20is%20my%20text&url=' + url;
					break;
				case 'facebook':
					shareurl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(url);
					break;
				case 'google':
					shareurl = 'https://plus.google.com/share?url=' + url;
					break;
				case 'linkedin':
					shareurl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + encodeURI(title) + '&summary=' + encodeURI(description) + '&source=LinkedIn';
					break;
				case 'pinterest':
					shareurl = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + encodeURI(description) + '&source=LinkedIn';
					break;
				case 'reddit':
					shareurl = 'http://www.reddit.com/submit?url=' + url + '&title=' + encodeURI(title);
					break;
				case 'tumblr':
					shareurl = 'http://www.tumblr.com/share?v=3&u=' + url + '&t=' + encodeURI(title);
					break;
				case 'stumbleupon':
					shareurl = 'http://www.stumbleupon.com/submit?url=' + url + '&title=' + encodeURI(title);
					break;
				case 'slashdot':
					shareurl = 'http://slashdot.org/bookmark.pl?url=' + url + '&title=' + encodeURI(title);
					break;
				case 'delicious':
					shareurl = 'http://del.icio.us/post?url=' + url + '&title=' + title + '&notes=' + encodeURI(description);
					break;
				default:
					shareurl = false;
			}
			if (shareurl) {
				window.open(shareurl, 'Share window', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			}
			console.log(shareurl);
		}
	};
})();