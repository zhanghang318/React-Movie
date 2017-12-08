import React from 'react'
import {Card,Button} from 'antd'
import {comment} from '../../api/mock'
import CommentItem from './commentItem'
export default class MovieComment extends React.Component {
    constructor(){
        super();
        this.state={
            commentList:comment.commentList,
            slice:5,
            buttonLoading:false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
       this.setState({
           buttonLoading:true
       })
        setTimeout(()=>{
           this.setState({
               slice:10
           })
        },1000)
    }
    render(){
       const {commentList,slice,buttonLoading} = this.state
        let sliceArray = commentList.slice(0,slice)
        let Items = sliceArray.map((item,index)=>(
            <CommentItem
                key={item.id}
                imgUrl={item.url}
                name={item.name}
                content={item.content}
                time={item.time}
            />
        ))
        return (
            <div className='CommentCon'>
                <Card title='评论'>
                    <ul className='commentList'>
                        {Items}
                    </ul>
                <div className='loadMore'>
                    {slice<commentList.length?<Button loading={buttonLoading} onClick={this.handleClick}>
                        加载更多...
                    </Button>:<p>没有更多数据了</p> }
                </div>
                </Card>
            </div>
        )
    }
}