import React from 'react';
import ReactDOM from 'react-dom';
import RootRooter from './components/Router/RouterConfig'
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootRooter/>, document.getElementById('root'));
registerServiceWorker();
