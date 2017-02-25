/*

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONjoLe/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can click a button to show me a new random quote.

User Story: I can press a button to tweet out a quote.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.

*/

/* Fisher-Yates shuffle

https://bost.ocks.org/mike/shuffle/
	
	function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

*/


var data = {
	"quotes": [
		{
			"quote": "No such thing as spare time\nNo such thing as free time\nNo such thing as downtime\nAll you got is a lifetime\nGo",
		  "author": "Henry Rollins"
		},
		{
			"quote": "Live passionately, even if it kills you, because something is going to kill you anyway.",
			"author": "Webb Chiles"
		},
		{
			"quote": "A man is not old until regrets take the place of dreams",
			"author": "John Barrymore"
		}
	]
};

// var handlers = {
// 	changeQuote function() {

// 	}
// }

var view = { 
	displayQuote: function() {
		var quotesDiv = document.getElementById('quotes');
		// for (var i = 0;)
		quotesDiv.innerHTML = data.quotes[view.getRandomIntInclusiv(0,2)].quote;
	},
	getRandomIntInclusiv: function(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1));
}
};

view.displayQuote();
