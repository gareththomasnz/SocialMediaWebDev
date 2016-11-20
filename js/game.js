(function() {
	window.onload = function() {
		var btnTw = document.getElementById("twitter-btn");
		var btnFb = document.getElementById("facebook-btn");
		var output = document.getElementById("question");
		var listen = document.getElementById("check");
		var questionnum = 0,
			score = 0,
			totalquestions = 3,
			gameplaying = true,
			description = '';
		var quiz = [{
			"question": "4+4=",
			"answer": "8"
		}, {
			"question": "2+2=",
			"answer": "4"
		}, {
			"question": "5+1=",
			"answer": "6"
		}];

		listen.onclick = function checkanswer() {
			if (gameplaying) {
				var myanswer = document.getElementById("guess").value;
				if (myanswer == quiz[questionnum]['answer']) {
					score++;
				}
				console.log(score);
				questionnum++;
			}
			if (questionnum >= totalquestions) {
				console.log('end game');
				output.innerHTML = "game over your score is " + score + " correct out of " + totalquestions;
				gameplaying = false;
			} else {
				setquiz(questionnum);
			}
		};

		function setquiz(questionnum) {
			if (gameplaying) {
				output.innerHTML = quiz[questionnum]['question'];
			}
		}
		setquiz(questionnum);


		btnFb.onclick = function facebookopen() {
			FB.ui({
				method: "feed",
				link: "http://www.discoveryvip.com",
				picture: "http://www.discoveryvip.com/assets/img/siteimage.jpg",
				name: "Play the quiz to win",
				caption: "",
				description: "I scored " + score + " correct out of " + totalquestions + " questions on the quiz"
			});
		};

		btnTw.onclick = function twitteropen() {
			description = "I scored " + score + " correct out of " + totalquestions + " questions on the quiz";
			shareurl = 'https://twitter.com/intent/tweet?text=' + encodeURI(description) + '&url=http://www.discoveryvip.com';
			window.open(shareurl, 'Share window', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		};

	};
})();