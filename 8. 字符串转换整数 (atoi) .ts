import { bindTimeLog } from "./Tools";

/**
 * 8. 字符串转换整数 (atoi) 
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param s 
 */
function myAtoi(s: string): number {
    let matched = s.match(/^(?:\s*)([+-]?\d+)/);

    // console.log('matched', matched, matched.length);
    return matched === null || matched.length < 2 ? 0 : Number(matched[1]);
};

let timeLog = bindTimeLog(myAtoi);


timeLog(' -123   ');
timeLog('    123');
timeLog('123');
timeLog('+123');
timeLog('');
timeLog('   ');
