/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
	console.log("String:", s);

	let subS = ""
	let reps

	for (const char of s) {
		subS += char
		console.log("SubS:", subS)
		reps = s.length / subS.length
		console.log("reps:", reps)
		if (subS.repeat(reps) == s && reps > 1) {
			return true
		}
	}

	return false
};



console.log("---------------------------------");
console.log(repeatedSubstringPattern("abcd"))
console.log("---------------------------------");
console.log(repeatedSubstringPattern("abab"))
console.log("---------------------------------");
console.log(repeatedSubstringPattern("aba"))
console.log("---------------------------------");
console.log(repeatedSubstringPattern("aaa"))
console.log("---------------------------------");