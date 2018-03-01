import React from 'react'
import {Col} from 'antd'
import {Link} from 'react-router-dom'
export default  class MovieItem extends React.Component{
 render (){
        const {id,imgUrl,title,rating,genre,pageSize} = this.props
       let page = pageSize || 4
      return (
          <Col span={24 / parseInt(page)}>
              <div className='MovieItem'>
                  <div className='imgBox'>
                      <Link to={'/movie/'+id}>
                          <img src={imgUrl} alt=""/>
                      </Link>
                  </div>
                  <div className='imgMsg'>
                      <span className='title'>
                          {title}
                      </span>
                      {rating? <span className='rating'>
                          {rating}
                      </span>:<span className='genre'>
                          {genre}
                      </span>}
                  </div>
          </div>
          </Col>
      )
 }
}