/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let tokens = s.split(" ")
	let words = tokens.filter(t => {
		return !(t.includes(" ") || t.length == 0)
	})
	let lastWord = words[words.length - 1]
	return lastWord.length
};


console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("foking                  nigger"));
