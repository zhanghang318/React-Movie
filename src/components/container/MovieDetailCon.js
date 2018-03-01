import React from 'react'
import {Row,Col,BackTop,Icon} from 'antd'
import {axGet} from '../../api/api'
import '../../style/movie.css'
import MovieBanner from '../movie/MovieBanner'
import MovieIntro from '../movie/MovieIntro'
import MovieAbout from '../movie/MovieAbout'
export default class MovieDetail extends React.Component{
    state={
        data:null,
        isLoading:true
    }
    componentDidMount(){
        let that = this
        if(this.props.match.params.id){
            axGet('/v2/movie/subject/'+this.props.match.params.id).then(function(res){
              if(res.status===200 && !that.unmount){
                  that.setState({
                      data:res.data,
                      isLoading:false
                  })
              }
            },function(error){
                console.log(error)
            })
        }
    }
    componentWillUnmount() {
        this.unmount = true;
    }
    render(){
        const {isLoading,data}= this.state
        return (
            <div className='DetailLayout'>
                <div className='movieBanner'>
                    <MovieBanner isLoading={isLoading} data={data}/>
                </div>
                <Row>
                    <Col span={18}>
                        <MovieIntro isLoading={isLoading} data={data}/>
                    </Col>
                    <Col span={5} offset={1}>
                        <MovieAbout/>
                    </Col>
                </Row>
                <BackTop>
                    <div className="ant-back-top-inner">
                        <Icon type="arrow-up"/>
                    </div>
                </BackTop>
            </div>
        )
    }
}