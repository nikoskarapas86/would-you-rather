import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData }  from './actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';

class App extends Component {

  componentDidMount(){
    this.props.handleInitialData()
  }
  render() {
  return (
    <div className="App">
      <Router>
        <Fragment>
        <div className='container'>
        <Route path='/' exact component={Login} />
         
        </div>
        </Fragment>
      </Router>
     
     
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



export default connect(mapStateToProps, mapDispatchToProps)(App);
