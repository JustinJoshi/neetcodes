class Codec {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;
        while (i < s.length) {
            const j = s.indexOf('#', i);
            const len = parseInt(s.slice(i, j));
            result.push(s.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return result;
    }
}