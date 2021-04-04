import React, {Component} from 'react'
import { connect } from 'react-redux'

class Login extends Component{

    selectionChanged = function(event) {
        const id = event.target.value;
    
        this.setState(function(previousState) {
          return {
            ...previousState,
            id,
          };
        });
      }


render(){
    return(
        <div>
            <h2>Login</h2>
            <div>select a user to login</div>
            <div>
            <select value={selected} onChange={(event) => this.selectionChanged(event)}>
              {Object.keys(users).map(function(key) {
                return (
                  <option value={users[key].id} key={key}>{users[key].id}</option>
                );
              })}
            </select>
            </div>
        </div>
    )
}


}


export default connect()(Login);
