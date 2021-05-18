/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/submissions/
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 
 * @param s 
 * @returns 
 */
function lengthOfLongestSubstring(s: string): number {
    let count: any = {}
    let start = 0
    let end = 0
    let maxRange = end - start

    s.split('').forEach((char, i) => {
        if (count[char] !== undefined) {
            if (count[char] >= start && count[char] <= end) {
                start = count[char] + 1
            }
            count[char] = i
        }

        end++
        count[char] = i

        if (maxRange < end - start) {
            maxRange = end -start
        }

        console.log(char, s.substring(start, end))
    })

    return maxRange
}

// console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("abba"))
