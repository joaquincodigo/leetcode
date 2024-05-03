/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	// console.log("SubS:", s);
	// console.log("Text:", t);
	let tp = 0

	for (const char of s) {
		// console.log("Searhing Char:", char);
		let isFound = false
		for (let i = tp; i < t.length; i++) {
			// console.log("Looking at:", t[i]);
			if (char == t[i]) {
				// console.log("Match With:", t[i]);
				tp = i + 1
				isFound = true
				break
			}
		}
		if (!isFound) return false
	}

	return true
};

console.log(isSubsequence("abc", "ahbgdc"));