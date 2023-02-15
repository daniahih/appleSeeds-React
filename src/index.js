import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Checkbox from './components/7.2_checkbox/7.2_checkbox';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
<Checkbox discription='I read the term of the app' />
<Checkbox discription='I accept the term of the app' />
<Checkbox discription='I want to get the weekly news letter' isChecked='true'/>
<Checkbox discription='I want to get offers and sales' isChecked='true'/>

    </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
