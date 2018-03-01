import React from 'react'
import {Card,Icon} from 'antd'
import Loading from '../common/loading'
import MovieComment from '../movie/MovieComment'
import {axGet} from '../../api/api'
const MovieIntro = ({isLoading,data})=>{
    let directorList,ActorList
    if(!isLoading){
         directorList = data.directors.map((item,index)=>(
            <li key={item.id}>
                <p className='topOne'>导演</p>
                <a href={item.alt}>
                <div className='imgBox'>
                    <img src={item.avatars.large} alt="人物图片"/>
                </div>
                </a>
                <p className='topTwo'>{item.name}</p>
            </li>
        ))
        ActorList =  data.casts.map( (item,index)=>{
             if(index===0){
                axGet(item.avatars.small).then(function(res){
                    console.log(res)
                },function(error){console.log(error)})
             }
                return (
                    <li  key={item.id}>
                        <p className='topOne'>{index===0?'主演':""}</p>
                        <a href={item.alt}>
                            <div className='imgBox'>
                                <img src={item.avatars.small} alt=""/>
                            </div>
                        </a>
                        <p>{item.name}</p>
                    </li>
                )
        }
        )
    }
    return(
        <div className='movieIntro'>
            <Card title='影片简介'>
                {isLoading?<Loading/>:data.summary}
            </Card>
            <Card title="演职人员" extra={<a href="javascript:;">更多<Icon type='right'/></a>}>
                {isLoading?<Loading/>: <ul className='roleActor'>
                    {directorList}
                    {ActorList}
                </ul>}
            </Card>
            <MovieComment/>
        </div>
    )
}
export default MovieIntro