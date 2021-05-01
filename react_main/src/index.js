import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
  
// state and behaviour of class //
/*
function Clock(props)
{
  return(
    <div>
      <h1> Good Afternoon </h1>
      <h2> today date {props.date.toLocaleDateString()}</h2>
    </div>
  );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(tick,1000);

ReactDOM.render(
  <tick/>,
  document.getElementById('root')
);
*/



/*convert function ---> class */
/*
class Clock extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1289);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return(
      <div>
        <h1> Hello India </h1>
        
        <h2> Today date {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
// above class is converted from function 
*/
// event handing in javascript react //

/*
class Toggle extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {isToggleOn:false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Dheeraj' : 'Raikwar'}
      </button>
    );
  }
}
*/

//event handling using event handler function
/* 
function getName(props)
{
  const name = 'Dheeraj';
  return <h1> {name} </h1>;
}
function UserGreet(props){
  return <h1> Welcome user </h1>;
}
function GuestGreet(props){
  return <h1> Please signup </h1>;
}

function Greeting(props)
{
  const isLogged = props.getName;
  if(isLogged)
  {
    return <UserGreet/>;
  }
  return <GuestGreet/>;
}
ReactDOM.render(
  <Greeting isLogged={false}/>,
  document.getElementById('root')
); */



reportWebVitals();
