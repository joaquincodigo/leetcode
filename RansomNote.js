/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
	let mag = magazine.split("")
	for (const char of ransomNote) {
		let isCharAvailable = (mag.indexOf(char) != -1)

		if (isCharAvailable) {
			let removalIndex = mag.indexOf(char)
			mag.splice(removalIndex, 1)
		}
		else {
			return false
		}
	}

	return true
};


console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));