class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const n of nums) count[n] = (count[n] || 0) + 1;
        return Object.keys(count)
            .sort((a, b) => count[b] - count[a])
            .slice(0, k)
            .map(Number);
    }
}