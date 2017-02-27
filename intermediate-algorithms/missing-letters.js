function fearNotLetter(str) {
	  var missingLetter;

    for (i = 0; i < str.length - 1; i++ ) {
      var j = i + 1;

      if ( str.charCodeAt(i) !== str.charCodeAt(j) - 1) {
        missingLetter =  String.fromCharCode(str.charCodeAt(i) +1);
        break;
	  }
    }

    return missingLetter;
	}

fearNotLetter("abcdefghjklmno");
