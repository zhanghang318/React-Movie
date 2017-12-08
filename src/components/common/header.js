import React from 'react'
import {NavLink} from 'react-router-dom'
import {Layout,Row,Col,Icon} from 'antd'
const {Header} = Layout
export default class Head extends React.Component{
    render(){
        return(
        <Header className='warp'>
            <Row>
                <Col span={6}>
                    <div className='logo'>

                    </div>
                </Col>
                <Col span={12} offset={2}>
                    <ul className='header_tab'>
                      <li><NavLink to='/' exact activeClassName='header_currPage'>首页</NavLink></li>
                      <li><NavLink to='/movie' activeClassName='header_currPage'>电影</NavLink></li>
                      <li><NavLink to='/spot' activeClassName='header_currPage'>热点</NavLink></li>
                      <li><NavLink to='/music' activeClassName='header_currPage'>音乐</NavLink></li>
                      <li><NavLink to='/book' activeClassName='header_currPage'>书籍</NavLink></li>
                    </ul>
                </Col>
                <Col span={4}>
                    <div className='loginBtn'><span><Icon type="user" style={{color:"#108ee9",marginRight:"5px",fontSize:16}}/>登录</span></div>
                </Col>
            </Row>
        </Header>
        )
    }
}