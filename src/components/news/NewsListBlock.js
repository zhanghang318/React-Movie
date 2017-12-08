import React from 'react'
export default class NewsListBlock extends React.Component{
    render (){
        const {type,count,text,data} = this.props
        let ListItem = []
        if(text&&type==='title'){
            if(data&&Array.isArray(data)){
                ListItem=data.map((item,index)=>(
                    <li key={item.uniquekey}><span className={index<3?"topThree":""}>{index+1}</span>{item.title}</li>
                ))
            } else {
                for( let i =1;i<=count;i++){
                    ListItem.push(<li key={i}><span className={i<=3?"topThree":""}>{i}</span>第{i}条热点新闻数据</li>)
                }
            }
        } else {
            if(data&&Array.isArray(data)){
                ListItem=data.map((item,index)=>(
                    <li key={item.id}><img src={item.url} alt='新闻图片'/><span>{item.text}</span></li>
                ))
            }
        }
        return (
            <div>
                <ul>
                    {type&&type==='title'?<li className='topTitle'>{text}</li>:""}
                    {ListItem}
                </ul>
            </div>
        )
    }
}