import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import TableData from './components/TableData';
import QuestionsOfUser from './components/QuestionsOfUser';
import Nav from './components/Nav';
import QuestionPanel from './components/QuestionPanel';

import Logout from './components/Logout';
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
                  <Route path='/question'  component={QuestionsOfUser} />
                  <Route path="/questions/:id" exact component={QuestionPanel} />
                  <Route path='/logout' component={Logout} />
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
