import React from 'react'
const CommentItem =({imgUrl,name,time,content})=>{
    return (
        <li>
            <div className='one'>
                <div className='left'>
                    <img src={imgUrl} alt=""/>
                    <span>{name}</span>
                </div>
                <span>{time}</span>
            </div>
            <div className='two'>
                {content}
            </div>
        </li>
    )
}
export default CommentItem