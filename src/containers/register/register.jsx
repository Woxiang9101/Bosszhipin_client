import React, {Component} from 'react';
import {connect} from 'react-redux';//
import {Redirect} from 'react-router-dom';//
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile';

import Logo from '../../components/logo/logo';
import {register} from '../../redux/actions';
// import {ERROR_MSG} from "../../redux/action-types";

//

class Register extends Component {

    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen'
    };

    //处理表单输入
    handleChange = (name, value) => {
        this.setState({[name]: value})
    };
    // 注册按钮//{type:ERROR_MSG, data: ' 用户名密码必须输入'}
    register = () => {
        // console.log(JSON.stringify(this.state));
        this.props.register(this.state);
    };
    //已有账号按钮
    toLogin = () => {
        this.props.history.replace('/login')
    };

    render() {

        const {redirectTo, msg} = this.props;//
        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }//

        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    {msg ? <p className='error-msg'>{msg}</p> : null}
                    <List>
                        <InputItem placeholder=' 输入用户名'
                                   onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder=' 输入密码'
                                   onChange={val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder=' 输入确认密码'
                                   onChange={val => this.handleChange('password2', val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span style={{marginRight: 30}}>用户类型:</span>
                            <Radio onClick={() => {
                                this.handleChange('type', 'dashen')
                            }}
                                   checked={this.state.type === 'dashen'}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onClick={() => {
                                this.handleChange('type', 'laoban')
                            }}
                                   checked={this.state.type === 'laoban'}>老板</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册
                        </Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已经有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => state.user,
    {register}
)(Register)