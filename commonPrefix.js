/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let lcp = ""
	for (let i = 0; i < strs[0].length; i++) {
		const char = strs[0][i];
		let isPrefix = true
		for (let j = 1; j < strs.length; j++) {
			const str = strs[j];

			if (char != str[i]) {
				isPrefix = false
				break
			}
		}

		if (isPrefix) {
			lcp = lcp + char
		} else {
			break
		}
	}

	return lcp
};

console.log(longestCommonPrefix(["flower", "flow", "floor"]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["cir", "car"]))
