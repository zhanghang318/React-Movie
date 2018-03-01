import React from 'react'
import {Carousel,Card} from 'antd'
import HotMovie from '../movie/HotMovie'
import SpotNew from '../news/spotNews'
import MusicList from '../music/MusicList'
import '../../style/home.css'
class HomeContainer extends React.Component{
    render(){
        return(
          <div className='homeLayout'>
              <Card className='home'>
                  <div className='carousel'>
                      <Carousel autoplay>
                          <div><img src={require("../../image/movie_carousel_1.jpg")} alt='暂无图片'/></div>
                          <div><img src={require("../../image/movie_carousel_2.jpg")} alt='暂无图片'/></div>
                          <div><img src={require("../../image/movie_carousel_3.jpg")} alt='暂无图片'/></div>
                          <div><img src={require("../../image/movie_carousel_4.jpg")} alt='暂无图片'/></div>
                      </Carousel>
                  </div>
                  <HotMovie type='in_theaters'total={10} pageSize={4} title='热门电影'/>
                  <SpotNew/>
                  <MusicList/>
              </Card>
          </div>
        )
    }
}
export default HomeContainer

