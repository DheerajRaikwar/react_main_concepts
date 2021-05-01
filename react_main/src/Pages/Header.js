import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  state={
    isOpen:false
  }
  handleToggle=()=>{
    this.setState({isOpen:this.state.isOpen})
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
          <a className="navbar-brand" href="/">Travelo</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"> <a className="nav-link" href="/">Home </a> </Link>
        </li>
        <li className="nav-item">
          <Link to="/Cities">
            <a className="nav-link" href="/Cities"> Cities </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
