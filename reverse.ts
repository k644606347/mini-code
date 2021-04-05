import { log } from "console"
import _ from "lodash"

function reverseStr(str = '') {
    log('origin', str)
    log([...str])
    return [...str].reverse().join('')
}



const str1 = '😄😭⬆️⬆\ufe0e';
log(reverseStr(str1))
log(_.reverse([...str1]))