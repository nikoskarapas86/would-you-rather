import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { notLoggedIn } = this.props;
    console.log(notLoggedIn)
    return (
      <div className="App">
      <Switch>
    {
        notLoggedIn ? <Route path='/' exact component={Login}/> :
        <Fragment>
            <Router>
              <div className='container'>
              <Route path='/' component={NewQuestion}/>
              </div>
            </Router>
          </Fragment>
    }
      </Switch>
     



      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
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
