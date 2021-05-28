//缓存数据
function getCache(fn) {
    let obj = {}
    return function (kw) {
        const key = JSON.stringify(kw);
        console.log(key);
        if (obj[key]) return obj[key];
        obj[key] = fn(kw)
        return obj[key];
    }
}

function add(arr) {
    // console.log('000');
    return arr.map(item => item.name)
}

const cacheFn = getCache(add)

const res = cacheFn([{ name: '黑马' }, { name: '黑马' }]);
const res1 = cacheFn([{ name: '黑马' }]);
// console.log(res);
// console.log(res1);