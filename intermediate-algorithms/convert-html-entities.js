function convertHTML(str) {

	var newStr = str.replace(/[&<>"']/g, function(piece) {
			var replacements = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&apos;"
			};
    return replacements[piece] || piece;
  });

	debug(newStr);
	// debug(replaced);

}

// convertHTML("Sixty > twelve");
// convertHTML("Hamburgers < Pizza < Tacos")
// convertHTML('Stuff in "quotation marks"')
convertHTML("Dolce & Gabbana");



/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
 */
