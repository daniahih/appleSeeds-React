import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/3.2 BasicsOFJSX/3.2.css'
import reportWebVitals from './reportWebVitals';
import Basics from './components/3.2 BasicsOFJSX/3.2_basics_of_jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Basics />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
