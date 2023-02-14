import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Button from './components/5.1_buttons/5.1_buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Button name ='not important '/>
        <Button name ='important'/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
