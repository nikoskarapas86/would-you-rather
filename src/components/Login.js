import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class Login extends Component {
  state = {
    userId: null
  }
  selectionChanged = (event) => {
    const userId = event.target.value;

    this.setState(function (previousState) {
      return {
        ...previousState,
        userId,
      };
    });
  }
  handleSubmit = (event) => {

    const { userId } = this.state;
    const { authenticate } = this.props;
    event.preventDefault();
    if (userId) {
      authenticate(userId);
    } else {
      alert('Please select a user before.');
    }
  }

  render() {
    const { users } = this.props;
    const { userId } = this.state;
    const selected = userId ? userId : '';
    console.log(selected)
    return (
      <div>
        <h2>Login</h2>
        <div>select a user to login</div>
        <div>
          <select value={selected} onChange={(event) => this.selectionChanged(event)}>
            <option value={''} disabled>Select user...</option>
            {Object.keys(users).map(function (key) {
              return (
                <option value={users[key].id} key={key}>{users[key].id}</option>
              );
            })}
          </select>
        </div>
        <button
          className='btn'
          disabled={userId === null}
          onClick={(event) => this.handleSubmit(event)}
        >
          Login
          </button>
      </div>
    )
  }


}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: (userId) => {
      dispatch(setAuthedUser(userId))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(Login);
