import React from 'react';
import ReactDOM from 'react-dom';
// App 컴포넌트 임포트
import App from './Mlb';
// React 성능을 측정하기 위한 파일
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
