/*
包含 n 个工具函数的模块
*/
/*
注册 laoban--> /laobaninfo
注册大神 --> /dasheninfo
登陆 laoban --> /laobaninfo 或者 /laoban
登陆大神 --> /dasheninfo 或者 /dashen
*/
export function getRedirectPath(type, header) {
    let path = '';
    // 根据 type 得到 path
    path += type==='laoban' ? '/laobanmain' : '/dashenmain';
    // 如果没有头像添加 info
    if(!header) {
        path += 'info';
    }
    return path
}