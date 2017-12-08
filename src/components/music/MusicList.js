import React from 'react'
import {Row,Col} from 'antd'
import NewListBlock from '../news/NewsListBlock'
import MusicListCon from './MuiscListCon'
import {Link} from 'react-router-dom'
import {musicTop} from '../../api/mock'
export default class MusicList extends React.Component{
    render() {
        return (
            <div className='ListCon'>
                <div className='content_title'>
                    <span className='title_text'><Link to='/movie'>流行音乐</Link></span>
                </div>
                <div className='Music_content'>
                   <Row>
                       <Col span={18}>
                           <MusicListCon/>
                       </Col>
                       <Col span={6}>
                            <div className='TopLIst'>
                                <NewListBlock type="title" count={10} text='新歌榜' data={musicTop.musicTopList}/>
                            </div>
                       </Col>
                   </Row>
                </div>
            </div>
        )
    }
}