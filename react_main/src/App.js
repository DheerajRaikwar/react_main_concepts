
import './App.css';
import './bootstrap.css';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import ErrorPage from './Pages/ErrorPage';
import SingleCity from './Pages/SingleCity';
import Header from './Pages/Header';
import {Route,Switch} from 'react-router-dom'; 


function App() {
  return (
    <>
     <Header/>
      <Switch>
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/Cities" component={Cities}/>
      <Route exact path="/Cities/:slug" component={SingleCity}/>
      <Route component={ErrorPage}/>
      </Switch>
      
     </>
  );
}

export default App;
