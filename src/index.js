import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImageText from './ImageText';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ImageText />, document.getElementById('imageroot'));
registerServiceWorker();
