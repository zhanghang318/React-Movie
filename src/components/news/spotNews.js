import React  from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Carousel, Tabs} from 'antd'
import NewsListBlock from './NewsListBlock'
import {newList} from '../../api/mock'
const {TabPane} = Tabs
export default class SpotNew extends React.Component{
    state={
        tabList:[{title:"国内",type:"guonei",key:1},{title:"国际",type:"guoji",key:2},{title:"娱乐",type:"yule",key:3},{title:"体育",type:"tiyu",key:4},{title:"军事",type:"junshi",key:5},{title:"社会",type:"shehui",key:6}]
    }
    tabClick = (value)=>{
        console.log(value)
    }
    render(){
        const {tabList} = this.state
        let tabItem = tabList.map(item =>(
            <TabPane tab={item.title} key={item.key}>
                <NewsListBlock type={item.type} count={5} data={newList.newConList}/>
            </TabPane>
            )
        )
        return (
            <div className='newLayout'>
                <div className='content_title'>
                    <span className='title_text'><Link to='/spot'>热点新闻</Link></span>
                </div>
                <div className='new_con'>
                  <Row gutter={10}>
                      <Col span={8}>
                         <Carousel autoplay className="carousel1">
                             <div><img src={require("../../image/news_carousel_1.jpg")} alt='平壤居民罕见用韩国品牌相机拍照'/></div>
                             <div><img src={require("../../image/news_carousel_2.jpg")} alt='土耳其公投成功海外公民有喜有悲'/></div>
                             <div><img src={require("../../image/news_carousel_3.jpg")} alt='镜头记录雄安新区街头即景'/></div>
                             <div><img src={require("../../image/news_carousel_4.jpg")} alt='长沙现微型古籍疑是科举作弊用书'/></div>
                         </Carousel>
                      </Col>
                      <Col span={10} >
                          <Tabs defaultActiveKey="1" onTabClick={this.tabClick} className='newsBlock'>
                              {tabItem}
                          </Tabs>
                      </Col>
                      <Col span={6}>
                          <div className="TopLIst">
                              <NewsListBlock type='title' count={10} text='热点头条'/>
                          </div>
                      </Col>
                  </Row>
                </div>
            </div>
        )
    }
}