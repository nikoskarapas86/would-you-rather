import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData }  from './actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    this.props.handleInitialData()
  }
  render() {
  return (
    <div className="App">
     
    </div>
  );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData())
    }
  }
}



export default App;
