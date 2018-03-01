import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RootRooter from './components/Router/RouterConfig'
import {Provider} from 'react-redux'
import store from './store/configStore'
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Provider store={store}><RootRooter/></Provider>, document.getElementById('root'));
registerServiceWorker();
