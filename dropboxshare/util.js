export const byteFormat = size => {
    if (!size || size <= 0) {
        return '0 B';
    }
    const name = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let pos = 0;
    while (size >= 1024) {
        size /= 1024;
        pos++;
    }
    return size.toFixed(2) + ' ' + name[pos];
};



export const dateFormat = (date, fmt = 'YYYY-MM-DD HH:mm:ss') => {
    if (!date) {
        throw new Error('invalid date');
    }
    if (typeof date === 'string') {
        date = new Date(date.replace(/-/g, '/'));
    }
    if (typeof date === 'number') {
        date = new Date(date);
    }
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
    };
    var week = {
        '0': '\u65e5',
        '1': '\u4e00',
        '2': '\u4e8c',
        '3': '\u4e09',
        '4': '\u56db',
        '5': '\u4e94',
        '6': '\u516d'
    };
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + '']
        );
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fmt;
};



export const loadScript = src => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};


export const copyText = text => {
    const dom = document.createElement('input');
    dom.value = text;
    // 不能设置宽高为0或者display:none,此方案已测试Chrome,Safari,Firefox有效
    dom.style.left = '-999px'
    dom.style.top = '-999px'
    dom.style.opacity = 0;
    dom.style.position = 'fixed'
    document.body.appendChild(dom);
    dom.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    setTimeout(() => {
        document.body.removeChild(dom);
    }, 200);
}