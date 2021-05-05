/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

const {log} = console

/**
 * 纵向扫描
 * time O(mn) m=字符串平均长度, n=strs.length
 * space O(1)
 * @param strs 
 * @returns 
 */
function longestCommonPrefix(strs: string[]): string {
    let commonStr = ''

    if (strs.length <= 1) {
        return strs[0] || ''
    }

    const str0 = strs[0]
    for (let i = 0; i < str0.length; i++) {
        const char = str0.charAt(i)

        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) !== char) {
                return commonStr
            }
        }
        
        commonStr += char
    }

    return commonStr
}

log(["flower","flow","flight"])