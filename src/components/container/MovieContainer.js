import React from 'react'
import {Layout} from 'antd'
import MovieMenu from '../movie/MovieMenu'
import HotMovie from '../movie/HotMovie'
import '../../style/movie.css'
const {Content,Sider} = Layout
export  default class Movie extends React.Component{
    state={
        movieTypeList:[{type:"in_theaters",total:20,pageSize:4,title:'正在热映',id:"hotShowing"},{type:"coming_soon",total:20,pageSize:4,title:'即将上映',id:"comingSoon"},{type:"top250",total:25,pageSize:4,title:'Top25',id:"Top25"},{type:"us_box",total:10,pageSize:6,title:'北美票房榜',id:"usBox"}]
    }
    render (){
        const {movieTypeList} = this.state
        let movieList=null
        movieList=movieTypeList.map((item,index)=>(
            <HotMovie key={index} type={item.type} total={item.total} pageSize={item.pageSize} title={item.title} id={item.id}/>
        ))
        return (
            <div className='MovieLayout'>
               <Layout>
                   <Sider>
                       <MovieMenu/>
                   </Sider>
                   <Content>
                       {movieList}
                   </Content>
               </Layout>
            </div>
        )

    }
}