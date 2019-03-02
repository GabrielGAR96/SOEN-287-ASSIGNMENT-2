function a2q4(names) {
	// body...

	document.write("<h1>Assignment 2 Question 4</h1>");
	var count = 0;
	for (var i = 0; i < names.length; i++) {
		if (names[i].search("u") < 0 && 
			(names[i].startsWith("pa") || names[i].startsWith("po"))) {
			count++;
		}
	}
	document.write("The number of words starting with \"pa\" or \"po\" and not containing the letter \"u\" is: " 
		+ count);
	document.write("<p/>");
}