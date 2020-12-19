import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//통상적으로 하나의 root컴포넌트를 렌더링하는 방식으로 실행한다.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
