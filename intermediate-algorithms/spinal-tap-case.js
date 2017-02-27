function spinalCase(str) {

  var newStr = str.charAt(0).toLowerCase() + str.slice(1)	// Ensure first letter of string is lower case so no dash will be placed in front of it
    .replace(/([A-Z])/g, '-$1').trim()      // Place a dash in front of all capital letters
    .replace( /_/g, "")                     // remove all underscores
    .replace( /\s/g, "-")								    // replace all spaces with dashes
    .replace( /--/g, "-")                   // remove any double dashes
    .toLowerCase();                         // convert any caps to lowercase
  debug(newStr);
	return newStr;
}

// Advanced Solution
// return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

