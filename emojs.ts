/**
 * emoji
 * 
 * 变体选择器U+FE0F导致了字符长度增加
 * 
 * 为什么会有变体选择器？
 * 思考：变体选择器可将黑白表情字符升级到漂亮的emoji，使之在支持的设备上显示emoji，而不支持的设备显示黑白字符
 */
import { log } from 'console';
import _ from 'lodash'
import nodeEmoji from 'node-emoji'

function emoji1() {
    // const str1 = 'hello🌞🌛'
    const str1 = '⬆️'

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