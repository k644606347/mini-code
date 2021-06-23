import { isNil } from "lodash";
import { withLog } from "utils/Tools";

const unicodeToUtf8 = withLog((str: string) => {
    const result = str.split('').map(n => {
        const codePoint = n.codePointAt(0);

        if (isNil(codePoint)) {
            return '';
        }

        let utf8Hex = '';
        if (codePoint <= 0x007f) {
            utf8Hex = '\\u' + codePoint.toString(16).padStart(4, '0')
        }

        // TODO: 后续的utf8转换规则
        return utf8Hex
    }).join('')
    return result
})

const encodeURIComponentBy = withLog((str: string) => {
    const otherSymbols = ['?']
    return unicodeToUtf8(str).split('\\u').filter(Boolean).map(n => {
        const codePointNum = Number('0x' + n)
        const str = String.fromCodePoint(codePointNum)

        if (codePointNum <= 0x7e && !otherSymbols.includes(str)) return str
        let index = 0;
        let item = '';
        let result = '';
        while (item = n.substr(index, 2)) {
            index += 2
            if (/^0+$/.test(item)) continue
            result += ('%' + item.toUpperCase())
        }

        return result
    }).join('')
})

unicodeToUtf8(' 123')
unicodeToUtf8('\u003f')
encodeURIComponent('\u003f\u0076')
encodeURIComponentBy('\u003f\u0076')