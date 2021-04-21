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
    const { authedUser } = this.props;
    console.log(authedUser)
    return (
      <Router>
        <div className="App">

          {
            authedUser == null ? (<Route    render={() => (
           
                <Login />
            
            )} />) :
              <div>
               
                  <Nav />
                  <Fragment>
                    <Route path='/add'  component={NewQuestion} />
                    <Route path='/table' component={TableData} />
                    <Route path='/' exact component={QuestionsOfUser} />
                    <Route path="/questions/:id" exact component={QuestionPanel} />
                    <Route path='/logout' component={Logout} />
                  </Fragment>
               
              </div>
          }
        </div>
      </Router>

    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
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
