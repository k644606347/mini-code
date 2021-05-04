/**
 * emoji
 * 
 * 变体选择器(VS16: U+FE0F)导致了字符长度增加
 * 
 * 变体选择器VS16是什么，为什要用它：
 * https://stackoverflow.com/questions/38100329/some-emojis-e-g-have-two-unicode-u-u2601-and-u-u2601-ufe0f-what-does
 * 总结：变体选择器VS16用于表示彩色表情，使之在支持的设备上显示彩色表情，而不支持的设备优雅降级为对应的文本类表情
 */
import { log } from 'console';
import _ from 'lodash'
import nodeEmoji from 'node-emoji'

function emoji1() {
    const str1 = 'hello🌞🌛'
    // const str1 = '⬆️'

    log(str1.length)
    log(Array.from(str1).length)
    log(_.size(str1))

    for (let k of str1) {
        log(k)
    }

    log(str1.split('').length);
    log(str1.match(/.$/u)![0].codePointAt(0)!.toString(16));
    log(str1.match(/.$/)![0].codePointAt(0));
}

emoji1();

function getEmoji() {
    return [
        nodeEmoji.get('coffee'),
        nodeEmoji.get('heart'),
        nodeEmoji.emojify('I :heart: :coffee:')
    ]
}

log(getEmoji());
log(getEmoji().map(n => Array.from(n).map(i => '\\u' + i.codePointAt(0)!.toString(16))));