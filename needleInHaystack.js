/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	for (let i = -1; i < haystack.length; i++) {

		if (haystack[i] == needle[0]) { //Lets try to find the head of the needle
			if (haystack.slice(i, (i + needle.length + 0)) == needle) {
				return i
			}
		}
	}
	return -1
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("yx", "x"))
console.log(strStr("x", "y"))