import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/Header/Header';
import Container from './components/Inventory/Inventory';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));

registerServiceWorker();