
import React, { Component } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class Nav extends Component {

render(){
    const {user,users} =this.props;
    return(
        <div className="nav-container">
           
            <ul className="left-distance">
            <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/'>Main page</Link></li>
                <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/leaderboard'>Table data</Link></li>
                <li><Link className="link-item" style={{ textDecoration: 'none' }} to='/add'>add a question</Link></li>
            </ul>
            <div className="right-part">
                <img className="nav-img" src={users[user].avatarURL}/>
            <Link className="link-item" style={{ textDecoration: 'none' }} to='/logout'>logout</Link>
            </div>
        </div>
        )
}
}
function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users,
    };
}

export default connect(mapStateToProps)(Nav)