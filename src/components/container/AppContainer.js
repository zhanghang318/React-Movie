import  React from 'react'
import Head from '../common/header'
import HomeContainer from '../container/HomeContainer'
import Movie from '../container/MovieContainer'
import MusicContainer from '../container/MusicContainer'
import SpotContainer from '../container/SpotContainer'
import BookContainer from '../container/BookContainer'
import MovieDetail from '../container/MovieDetailCon'
import {Route} from 'react-router-dom'
export default class AppContainer extends React.Component{
    render(){
        return (
            <div className='warpContent'>
                <Head/>
                <div className='warp center'>
                    <Route path="/" exact component={HomeContainer}/>
                    <Route exact path="/movie" component={Movie}/>
                    <Route exact path='/movie/:id' component={MovieDetail}/>
                    <Route path="/spot" component={SpotContainer}/>
                    <Route path="/music" component={MusicContainer}/>
                    <Route path="/book" component={BookContainer}/>
                </div>
            </div>
        )
    }
}