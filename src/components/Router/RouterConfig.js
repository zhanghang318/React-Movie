import React from 'react'
import {BrowserRouter as Router,HashRouter,Route} from 'react-router-dom'
import AppContainer from '../container/AppContainer'
export default class RootRooter extends React.Component{
    render(){
        return (
            <Router>
                <Route path="/" eact component={AppContainer}>
                </Route>
            </Router>
        )
    }
}