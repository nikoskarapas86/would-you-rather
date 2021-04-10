
import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class Nav extends PureComponent {

render(){
    return(
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        )
}
}


export default connect(mapStateToProps, null)(Nav)