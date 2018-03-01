import React from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import HotMovieList from './HotMovieList'
import Loading from '../common/loading'
import {axPost} from '../../api/api'
import {connect} from 'react-redux'
import {getMovieHotApi,testTypeAction} from '../../action/testAction'
class HotMovie extends React.Component{
    state ={
        MovieDate:[],
        isLoading:false,
        current:1,
        sliceArray:[]
    }
    componentWillMount(){
      
    }
    componentDidMount(){
        this.request()
    }
    pageChange=(page)=>{
        this.setState({
            current:page
        })
     // this.request(page)
        this.sliceMethods(page)
    }
    componentWillUnmount(){
        this.unmount = true
    }
    componentWillReceiveProps(nextProps){
    const {hotMovieList} = nextProps
    let slice = hotMovieList.slice(0,4)
    this.setState({
        MovieDate:hotMovieList,
        sliceArray:slice,
        isLoading:false
    })
    // this.sliceMethods(1)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps)
    //     return true;
    // }
    //请求电影
    request (page){
        const {getMovieHotApi,type,total,pageSize,hotMovieList} = this.props
        this.setState({
            isLoading:true
        })
        let currentPage = page || this.state.current
        let start = (currentPage-1) * pageSize
        let end = start+pageSize
        // 不使用  redux 状态管理
        // let that = this
        // axPost(`/v2/movie/${this.props.type}`,{city:"郑州",start:start,count:this.props.total}).then(function(res){
        //     that.upDateList(res.data)
        // },function(error){
        //     console.log(error)
        // })
        // 使用  redux ，纯属瞎玩
        getMovieHotApi(type,start,total,'郑州',end)
        // this.setState({
        //     MovieDate:hotMovieList,
        //     isLoading:false
        // })
        // this.sliceMethods(1)
    }
    //更新 电影列表
    upDateList = data=>{
        if(data && !this.unmount) {
            this.setState({
                MovieDate:data.subjects,
                isLoading:false
            })
        }
     this.sliceMethods(1)
    }
    sliceMethods(page){
        const {MovieDate} = this.state
        let start =  (page-1) * this.props.pageSize
        let end = start + this.props.pageSize
        let slice = MovieDate.slice(start,end)
        this.setState({
            sliceArray:slice
        })
    }
    render(){
        const {sliceArray,isLoading,current} = this.state
        const {total,type,pageSize,title,id} = this.props
        return (
            <div className='HotMovie'classID={id?id:""}>
                <div className='content_title'>
                    <span className='title_text'><Link to='/movie'>{title}</Link></span>
                    <div className='pagination'>
                        <Pagination simple defaultCurrent={current} total={total} onChange={this.pageChange} pageSize={pageSize} current={current}/>
                    </div>
                </div>
                {isLoading?<Loading/>:<HotMovieList MovieDate={sliceArray} type={type} current={current} pageSize={pageSize}/>}
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        hotMovieList:state.hotMovieList,
    }
}
export  default connect(mapStateToProps,{
    getMovieHotApi,
})(HotMovie)