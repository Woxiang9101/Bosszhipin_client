/*
包含所有 action creator 函数的模块
*/
import {AUTH_SUCCESS, ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-types';

import {reqRegister, reqLogin,reqUpdateUser,list} from '../api';

// 同步错误消息
const errorMsg = (msg) => ({type:ERROR_MSG, data: msg});
// 同步成功响应
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
// 同步接收用户
const receiveUser = (user) => ({type: RECEIVE_USER, data: user});
// 同步重置用户
export const resetUser = (msg) => ({type: RESET_USER, data: msg});



//异步注册
export function register({username, password, password2, type}) {
// 进行前台表单验证 , 如果不合法返回一个同步 action 对象 , 显示提示信息
    if (!username || !password || !type) {
        return errorMsg(' 用户名密码必须输入');
    }
    if (password !== password2) {
        return errorMsg(' 密码和确认密码不同');
    }
    return async dispatch => {
// 异步 ajax 请求 , 得到响应
        const response = await reqRegister({username, password, type});
// 得到响应体数据
        const result = response.data;
// 如果是正确的
        if (result.code === 0) {
// 分发成功的 action
            dispatch(authSuccess(result.data))
        } else {
// 分发提示错误的 action
            dispatch(errorMsg(result.msg))
        }
    }
}

//异步登录,用户输入用户名和密码进行验证
export const login = ({username, password}) => {
    if (!username || !password) {
        //返回一个对象{type:'ERROR_MSG', data: ' 用户名和密码必须输入！'}
        return errorMsg(' 用户名和密码必须输入！');
    }
    //否则（也就是用户名和密码都输入了）
    //return dispatch一个函数
    return async dispatch => {
        const response = await reqLogin({username, password});
        const result = response.data;
        if (result.code === 0) {
            //dispatch{type: AUTH_SUCCESS, data: result.data}
            dispatch(authSuccess(result.data))
        } else {
            //dispatch一个对象{type:'ERROR_MSG', data: result.msg}
            dispatch(errorMsg(result.msg))
        }
    }
};

//异步更新用户
export const updateUser = (user) => {
    return async dispatch => {
        // 发送异步 ajax 请求
        const response = await reqUpdateUser(user);
        const result = response.data;
        if (result.code === 0) { // 更新成功
            dispatch(receiveUser(result.data))
        } else { // 失败
            dispatch(resetUser(result.msg))
        }
    }
};

//查询所有的老板或者大神
export const allList = (mold) => {

    return async dispatch => {
        const response = await list(mold);
        const result = response.data;
        if (result.code === 0) {
            //dispatch{type: AUTH_SUCCESS, data: result.data}
            dispatch({type: 'chaxunchenggong', data: result})
        } else {
            //dispatch一个对象{type:'ERROR_MSG', data: result.msg}
            dispatch(errorMsg(result.msg))
        }
    }
};