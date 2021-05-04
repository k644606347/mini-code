const qs = require('qs');

const { log } = console;

function getQuery(url) {
    // log(qs.parse('arr=df&arr[a][b]=aval&arr[b]=2'))
    // log(qs.stringify({a: 1, b: 2}))
    // log(qs.parse('/index.php?a=1&b=2&c=c'))
    // log(qs.stringify(qs.parse('/index.php?z=zzza=1&b=2&c=c#ddd')))
    // log(qs.parse('obj[a]=v1&b=2&c=c#ddd'))

    const keyCounts = {}
    let currentKey = '';
    const qsParseResult = qs.parse(url, {
        decoder(str, defaultDecoder, charset, type) {
            // console.log(type);

            currentKey = str;
            if (type === 'key') {
                let keyCount = keyCounts[str]
                if (keyCount >= 1)
                    return;

                if (keyCount === undefined) {
                    keyCount = keyCounts[str] = 1
                } else {
                    keyCounts[str] = ++keyCount
                }
            }

            const result = defaultDecoder(str);

            if (type === 'key') {
                console.log('key', result)
                return result;
            } else {
                return keyCounts[currentKey] === 1 ? result : null;
            }
        }
    });

    return qsParseResult;

    console.log('keyCounts', keyCounts)

    const uniquedQuery = {}
    Object.keys(qsParseResult).forEach(key => {
        if (keyCounts[key] > 1) {
            uniquedQuery[key] = qsParseResult[key][qsParseResult[key].length - 1]
        } else {
            uniquedQuery[key] = qsParseResult[key]
        }
    })

    return uniquedQuery;
}

// log(getQuery('arr=df&arr[a][b]=aval&arr[b]=2'))
// log(getQuery('arr=df&arr[a][b]=aval&arr[b]=2'))
// log(getQuery('[]=1&arr[]=df&arr[]=df2&arr1=aval&arr=gh&arr1=arr1val'))
// log(qs.parse('&arr&arr1&arr2=&arr3=3'))


// 'zz&a=1&a[]=item1&a[]=item2'.split('&').forEach(n => {
//     const [k,val = ''] = n.split('=');
//     console.log(k, val);
// })

const filterSearchStrCache = {}
function filterSearchStr(str = '') {
    if (!str) return str

    const cache = filterSearchStrCache

    if (cache[str]) return cache[str]

    let matched = str.split('#')
    const anchor = matched[1]
    matched = matched[0].split('?')
    const searchStr = matched.length === 2 ? matched[1] : matched[0]
    const prefix = matched.length === 2 ? matched[0] : undefined

    if (!searchStr.includes('&'))
        return str

    const params = searchStr.split('&').filter(val => val && val !== '=')
    
    // log('params', params, 'prefix', prefix)
    if (params.length === 0) return str

    let pureSearch = ''
    // 从后向前遍历，同名参数取最后出现的值
    for (let i = params.length - 1; i >= 0; i--) {
        const item = params[i]
        const [key, val = ''] = item.split('=')

        // 不处理数组型的参数
        if (/\[\]$/.test(key)) {
            pureSearch = '&' + item + pureSearch
            continue
        }

        // 过滤同名参数
        if (pureSearch.includes('&' + key + '=')) {
            continue
        }

        pureSearch = `&${key}=${val}` + pureSearch
    }

    // log('pureSearch', pureSearch)
    let filtedStr = ''
    if (str.indexOf('&') === 0)
        filtedStr = pureSearch;
    else {
        const suffix = pureSearch.substr(1);
        filtedStr = prefix !== undefined ? (prefix + '?' + suffix) : suffix
    }
    
    if (anchor) {
        filtedStr += '#' + anchor
    }

    return (cache[str] = filtedStr)
}

log("filterSearchStr('&p1=1&p1=1.1&p2=2#ahchor') =>", filterSearchStr('&p1=1&p1=1.1&p2=2#ahchor'))
log("filterSearchStr('?p1=1&p2=2&=3&p4&p4') =>", filterSearchStr('?p1=1&p2=2&=3&p4&p4'))
log("filterSearchStr('?arr[]=a&arr[]=b') =>", filterSearchStr('?arr[]=a&arr[]=b'))
log("filterSearchStr('&obj[c][]=c1&obj[c][]=c2') =>", filterSearchStr('&obj[c][]=c1&obj[c][]=c2'))
log("filterSearchStr('?obj[a]=1&obj[b]=b1&obj[a]=2&obj[b]=b2') =>", filterSearchStr('?obj[a]=1&obj[b]=b1&obj[a]=2&obj[b]=b2'))
log("filterSearchStr('&a=1&&&a=1.1&#anchor') =>", filterSearchStr('&a=1&&&a=1.1&#anchor'))
log("filterSearchStr('http://www.baidu.com/?a=1') =>", filterSearchStr('http://www.baidu.com/?a=1'))
log("filterSearchStr('/') =>", filterSearchStr('/'))
log("filterSearchStr('http://www.baidu.com/#anchor') =>", filterSearchStr('http://www.baidu.com/#anchor'))
log("filterSearchStr('?&a=1#anchor') =>", filterSearchStr('?&a=1#anchor'))
log("filterSearchStr('www.baidu.com/?a=1&b=2&b=3?c=3#anchor') =>", filterSearchStr('www.baidu.com/?a=1&b=2&b=3?c=3#anchor'))


// log(filterSearchStr('http://www.baidu.com/?bad[] =123&bad[] =456&arr[a][]=1&arr[b]=2&arr[][a]=1&&arr[][a]=2'))
// log(filterSearchStr('?a1=1&a1=2'))
// log(filterSearchStr('&a1=1&&=2'))
// log(filterSearchStr('=1&arr1=2'))
// log(filterSearchStr('arr1=1&arr1=2#123'))
// log(qs.stringify({token: ['a','a']}))

log(qs.parse('&p1[0]=v1&p1[1]=v2'))
// log('/market/222222222323232322222223'.replace(new RegExp(/(\d|[a-z]){24,32}$/,'g'),'*'))