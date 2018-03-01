import React from 'react'
import {Row} from 'antd'
import MovieItem from './MovieItem'
export default class HotMovieList extends React.Component{
       render(){
            let ItemList = null
            const {MovieDate,type,current,pageSize} = this.props
           if(type && type==='us_box'){
               ItemList= MovieDate.map(item=>(
                   <MovieItem
                       key={item.subject.id}
                       id={item.subject.id}
                       imgUrl={item.subject.images.large}
                       title={item.subject.title}
                       rating={item.subject.rating.average}
                       genre={item.subject.genres[0]}
                       pageSize={pageSize}
                   />
               ))
           } else {
               ItemList= MovieDate.map(item=>(
                   <MovieItem
                       key={item.id}
                       id={item.id}
                       imgUrl={item.images.large}
                       title={item.title}
                       rating={item.rating.average}
                       genre={item.genres[0]}
                   />
               ))
           }
           return(
               <div className='hotList'>
                   <Row gutter={8}>
                       {ItemList}
                   </Row>
               </div>
           )
       }
}