/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {

	if (s.length != t.length) return false

	let hash = {};

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]
		const tChar = t[i]

		if (hash.hasOwnProperty(sChar)) {
			if (hash[sChar] != tChar) return false
		}
		else {
			hash[sChar] = tChar
		}
	}

	let hashValues = Object.values(hash)
	let uniqueValues = new Set(hashValues)
	return hashValues.length == uniqueValues.size
};

console.log("egg, add >> true |", isIsomorphic("egg", "add"))
console.log();
console.log("foo, bar >> false |", isIsomorphic("foo", "bar"))
console.log();
console.log("paper, title >> true |", isIsomorphic("paper", "title"))
console.log();
console.log("babc, baba >> false |", isIsomorphic("badc", "baba"))