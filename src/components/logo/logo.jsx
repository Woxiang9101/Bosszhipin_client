/*
简单的显示 logo 的组件
*/

import React,{Component} from 'react'

import logo from './1.jpg'
import './logo.less'

export default class Logo extends Component {
    render () {
        return (
            <div className="logo-container">
                <img src={logo} alt="logo" className='logo-img'/>
            </div>
        )
    }
}