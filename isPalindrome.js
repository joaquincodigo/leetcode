/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
	let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
	// console.log("String:", str);
	let p1 = 0
	let p2 = str.length - 1

	while (p1 <= p2) {
		// console.log("p1:", p1);
		// console.log("p1 value:", str[p1]);
		// console.log("p2:", p2);
		// console.log("p2 value:", str[p2]);
		if (str[p1] != str[p2]) return false
		p1++
		p2--
	}

	return true
};


// console.log(isPalindrome("he.llo"))
// console.log(isPalindrome("ollo"))
// console.log(isPalindrome("what the fuck"))
// console.log(isPalindrome("aca.ese !! aca_"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))