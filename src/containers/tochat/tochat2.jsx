import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavBar, Icon, SearchBar, List,Toast} from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';

import io from 'socket.io-client';

import '../../assets/css/index.less';

const Item = List.Item;


// // 连接服务器 , 得到代表连接的 socket 对象 111.67.205.4:4000
const socket = io('ws://111.67.205.4:4000');
console.log(socket);


class Tochat2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            msgArray : ['这是初始msg', '这也是初始msg'],
            // inputValue : '我是inputvalue',
            msg : ''
        };
    }


    UNSAFE_componentWillMount() {

        let setmsg = (data) => {
            let allmsg = this.state.msgArray;
            allmsg.push(data);
            this.setState({msgArray: allmsg});
            console.log(this.state.msgArray);
        };
        socket.on('2receive', function (data) {
            console.log('收到消息 : ', data);
            setmsg(data);
        });
    }


    submit = (value) => {
        socket.emit('2send', value);
        console.log('发送消息 : ', value);
        this.setState({msg: value });
        this.successToast();
        let allmsg = this.state.msgArray;
        allmsg.push('我已发送-------->' + value);
        this.setState({msgArray: allmsg});
    };

    successToast = () => {
        Toast.success('发送完成,对方已成功收到消息!', 1.2);
    };


    render() {


        return (
            <div>


                <div className='iTopFixed'>
                    <NavBar icon={<Icon type="left"/>}
                            onLeftClick={() => console.log('onLeftClick')}
                            rightContent={[<Icon key="1" type="ellipsis"/>,]}
                    >用户2</NavBar>
                </div>



                <List> {this.state.msgArray.map((ele, index) => (
                    <QueueAnim  className="queue-simple">
                        <Item key={index}
                              wrap
                              multipleLine
                              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        >{this.state.msgArray[index]}</Item>
                    </QueueAnim>
                ))}
                </List>


                <div className='iBottomFixed'>
                    <SearchBar
                        // value={this.state.inputValue}
                        onCancel={value => {
                            this.submit(value)
                        }}
                        onSubmit={value => {
                            this.submit(value)
                        }}
                        cancelText='发送'/>
                </div>

            </div>

        )
    }
}

export default connect(
    state => state.user,
    // {allList}
)(Tochat2)