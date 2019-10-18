import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavBar, Icon, Card, WingBlank, WhiteSpace} from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';

import {allList} from '../../redux/actions';

import '../../socketio/test';
import '../../assets/css/index.less';

class Dashenmain extends Component {

    state = {
        username: '',
        password: '',
    };

    componentWillMount() {
        this.props.allList({mold: 'laoban'});
        console.log(this.props);
    }

    tochat = (id) =>{

        // ev.preventDefault();
        // console.log(id);
        console.log('tochat事件触发了一次'+id);
    };

    render() {

        const listType = this.props.type === 'dashen' ? '老板列表' : '大神列表';


        return (
            <div>

                <NavBar
                    mode="dark"
                    leftContent={listType}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >{this.props.username}</NavBar>
                {/*<p>{this.props.data.length}</p>*/}

                <div > {this.props.data.map((ele,index) => (
                    <QueueAnim duration={700}  type='scale' key={index}>
                        <div key={index} onClick={(e) => this.tochat(ele._id, e)}>
                            <WingBlank size="lg">
                                <WhiteSpace size="lg"/>
                                <Card>
                                    <Card.Header
                                        title={ele.username}
                                        thumb={ require('../../assets/images/' + ele.header + '.png')}
                                        extra={<span>{ele.company}</span>}
                                    />
                                    <Card.Body>
                                        <div>{ele.info}</div>
                                    </Card.Body>
                                    <Card.Footer content={'招聘 : ' + ele.post} extra={<div>{'薪资' + ele.salary}</div>}/>
                                </Card>
                                <WhiteSpace size="lg"/>
                            </WingBlank>
                        </div>
                    </QueueAnim>
                ))}
                </div>


            </div>
        )
    }
}

export default connect(
    state => state.user,
    {allList}
)(Dashenmain)