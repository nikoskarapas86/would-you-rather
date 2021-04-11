import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import TableData from './components/TableData';
import Nav from './components/Nav';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { notLoggedIn } = this.props;
    console.log(notLoggedIn)
    return (
      <div className="App">

        {
          notLoggedIn ? <Route path='/' exact component={Login} /> :
            <div>



              <Router>
                <Nav />
                <Fragment>
                  <Route path='/' exact component={NewQuestion} />
                  <Route path='/table' component={TableData} />
                </Fragment>
              </Router>

            </div>

        }





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
