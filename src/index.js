import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Card from './components/5.2 Card/5.2_Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{display:'flex',gap: 30}}>
   <Card imgURL ='https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'  
   title=' hello from the other side '
   descripton ="random description"  />
   <Card imgURL ='https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-113133662.jpg'
      title=' hello from the other side '
      descripton ="random description"  />
   <Card imgURL='https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg'
   title=' hello from the other side '
   descripton ="random description" />
    </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
