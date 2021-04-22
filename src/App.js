import React, { Component, Fragment } from 'react'
import './App.css';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Login from './components/Login';
import NewQuestion from './components/NewQuestion';
import Leaderboard from './components/Leaderboard';
import QuestionsOfUser from './components/QuestionsOfUser';
import Nav from './components/Nav';
import QuestionPanel from './components/QuestionPanel';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
class App extends Component {

  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <div className="App">

          {
            authedUser == null ? (<Route render={() => (

              <Login />

            )} />) :
              <div>

                <Nav user={authedUser} />
                <Fragment>
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/' exact component={QuestionsOfUser} />
                  <Route path="/questions/:id" exact component={QuestionPanel} />
                  {/* <Route path="*" exact component={NotFound} /> */}
                  <Route path='/error' component={NotFound} />
              
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
