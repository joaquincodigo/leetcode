/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {

			if (i !== j) {
				let sum = nums[i] + nums[j]
				if (sum == target) {
					const indexes = [i, j]
					return indexes
				}

			}

		}
	}
}


let result = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)
console.log(result)
