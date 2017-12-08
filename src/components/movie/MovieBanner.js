import React from 'react'
import Loading from '../common/loading'
import {Rate} from 'antd'
export default class MovieBanner extends React.Component{

    render(){
        const{data,isLoading} = this.props
        if (isLoading) {
            return (
                <Loading />
            )
        }
        console.log(data)
        const directorList = data.directors.map((item, index) => {
            if (index === data.directors.length - 1) {
                return item.name;
            } else {
                return item.name + '、';
            }
        });

        const actorList = data.casts.map((item, index) => {
            if (index === data.casts.length - 1) {
                return item.name;
            } else {
                return item.name + '、';
            }
        });
        return (
            <div className='bannerCon'>
                <div className='imgBox'>
                    <img src={data.images.large} alt="电影海报"/>
                </div>
                <div className='DetailInfro'>
                    <div className='title'>
                        <h3>{data.title}</h3>
                        <p>原名: {data.original_title}</p>
                    </div>
                    <p>导演:{directorList} </p>
                    <p>主演: {actorList}</p>
                    <p>国家:{data.countries.join('、')} </p>
                    <p>系列:{data.genres.join('、')} </p>
                    <p>年代:{data.year} </p>
                    <p>短评数:{data.comments_count} </p>
                    <p>评分人数:{data.ratings_count} </p>
                </div>
                <div className='core'>
                    <div className='movie_gate'>
                        {data.rating.average.toFixed(1)}
                    </div>
                    <Rate allowHalf defaultValue={data.rating.stars / 10}/>
                </div>
            </div>
        )
    }

}