class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().split('').filter(c => 
            (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
        ).join('');

        return cleaned === cleaned.split('').reverse().join('');
    }
}