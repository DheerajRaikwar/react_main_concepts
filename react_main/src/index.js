import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

/*
--------Here using Jsx --------- */
function formatName(usr){
  return usr.firstName + ' ' +usr.lastName;
}
const usr = {
  firstName: 'Dheeraj',
  lastName: 'raikwar'
};

const element = <h2> Hello, {formatName(usr)}</h2>;


const reactUser = (
  <h1 className="Hello">
    Hello react user
  </h1>
);

function formatDate(date)
{
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'We are learning react!',
  author:
  {
    name: 'Dheeraj',
    age: '21'
  },
}


function Comment(props){
  return(
    <div className="Comment">
      <div className="UserInfo">
        <h1> Hello, i am {props.author.name}</h1>
        <div className="UserAge">
          <p> Age of dheeraj:  {props.author.age} </p>
         
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>

      </div>
    </div>
  );
}

ReactDOM.render(
  <Comment
  date={comment.date}
  text={comment.text}
  author={comment.author} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
