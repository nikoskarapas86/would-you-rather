
import React, { Component } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class Nav extends Component {

render(){
    return(
        <div>
            <span>nav</span>
            <ul>
           
                <li> <Link to='/table'>Table data</Link></li>
                <li><Link to='/'>add a question</Link></li>
<<<<<<< HEAD
                <li><Link to='/questions'>questions</Link></li>
=======
                <li><Link to='/logout'>logout</Link></li>
>>>>>>> 328c8909ae8674c1ac9d79d07629e302de53b6de
            </ul>
        </div>
        )
}
}


export default Nav