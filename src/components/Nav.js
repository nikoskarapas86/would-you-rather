
import React, { Component } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class Nav extends Component {

render(){
    return(
        <div className="nav-container">
           
            <ul>
            <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/'>Main page</Link></li>
                <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/table'>Table data</Link></li>
                <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/add'>add a question</Link></li>
                {/* <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/question'>questions</Link></li> */}
                <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/logout'>logout</Link></li>
            </ul>
        </div>
        )
}
}


export default Nav