const qs = require('qs');

const { log } = console;

function getQuery() {
    log(qs.parse('/index.php?a=1&b=2&c=c'))
    log(qs.stringify(qs.parse('/index.php?z=zzza=1&b=2&c=c#ddd')))
    log(qs.parse('obj[a]=v1&b=2&c=c#ddd'))
    log(qs.parse('arr=df&arr[a][b]=aval&arr[b]=2', {
        decoder() {
            // console.log(arguments);

            const result = arguments[1](arguments[0]);

            console.log(result)
            return result;
        }
    }))
}

getQuery(); 


'zz&a=1&a[]=item1&a[]=item2'.split('&').forEach(n => {
    const [k,val = ''] = n.split('=');
    console.log(k, val);
})
