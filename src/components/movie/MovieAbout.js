import React from 'react'
import {Card} from 'antd'
import {messages, correlations} from '../../api/mock'
const MovieAbout = () =>{
let messageList,corrList
    messageList= messages.messageList.map((item,index)=>(
        <li key={item.id}>
            <img src={item.url} alt="相关电影"/>
            <div className='imgMsg'>
                <p>{item.title}</p>
                <p className='name'>{item.name}</p>
            </div>
        </li>
    ))
    corrList = correlations.correlationList.map((item,index)=>(
        <li key={item.id}>
            <img src={item.url} alt="电影资讯"/>
            <div className='imgMsg'>
                <p>{item.title}</p>
                <p className='name'>{item.name}</p>
            </div>
        </li>
    ))
    return (
     <div className='movieAbout'>
         <Card title='相关电影'>
             <ul className='listUl'>{messageList}</ul>
         </Card>
         <Card title='电影资讯'>
             <ul className='listUl'>{corrList}</ul>
         </Card>
     </div>
    )
}
export default MovieAbout