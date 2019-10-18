import React , {Component} from 'react';
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {login} from '../../redux/actions'

class Login extends Component{

    state = {
        username: '',
        password: '',
    };

    //处理表单输入
    handleChange = (name, value) => {
        this.setState({[name]: value})
    };
    // 登录按钮
    login = () => {
        // console.log(JSON.stringify(this.state))
        this.props.login(this.state);
    };
    //还没有账号按钮
    toRegister = () => {
        this.props.history.replace('/register')
    };

    render() {

        const {redirectTo, msg} = this.props;
        if (redirectTo) {
            return <Redirect to={redirectTo}/>;
        }


        return(
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
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有有账号？</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => state.user,
    {login}
)(Login)