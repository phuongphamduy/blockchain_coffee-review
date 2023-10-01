import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>;
<link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
