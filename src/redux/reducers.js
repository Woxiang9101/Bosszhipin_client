/*
包含 n 个根据老的 state 和 action 返回新的 state 的函数的模块
*/
import {combineReducers} from 'redux';

import {AUTH_SUCCESS, ERROR_MSG,RECEIVE_USER, RESET_USER} from './action-types';
import {getRedirectPath} from '../utils';

const initUser = {
    username: '初始dashen类型username', // 用户名
    type: 'dashen', // 类型
    msg: '这是原始msg', // 错误提示信息
    redirectTo: '', // 需要自动跳转的路由 path
    data:[{username:'这是data1的username'},{username:'这是data2的username'}]
};

function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:// 认证成功
            const redirectTo = getRedirectPath(action.data.type, action.data.header);
            return {...initUser,...action.data, redirectTo};
            // return {...action.data, redirectTo: '/'};
        case ERROR_MSG:// 错误信息提示
            return {...state, msg: action.data};
        case RECEIVE_USER: // 接收用户
            return action.data;
        case RESET_USER: // 重置用户
            return {...initUser, msg: action.data};

        case 'chaxunchenggong':
            return {...state,...action.data};

        default://返回redux中的数据而不需要调用action
            return state
    }
}

// 返回合并的 reducer
export default combineReducers({
    user
})
