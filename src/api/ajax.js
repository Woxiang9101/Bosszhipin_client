/*
使用 axios 封装的 ajax 请求函数
函数返回的是 promise 对象
*/
import axios from 'axios';

export default function ajax(url = '', data = {}, type = 'GET') {
    if (type === 'GET') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        });
        if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        return axios.get(url)
    } else {
        // 发送 post 请求
        return axios.post(url, data) // data: 包含请求体数据的对象
    }
}