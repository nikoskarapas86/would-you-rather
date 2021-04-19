import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import ReactTabs from 'react-tabs';
import { Tabs } from 'react-tabs';
import { TabList } from 'react-tabs';
import { Tab } from 'react-tabs';
import { TabPanel } from 'react-tabs';


class DashBoard extends Component {



  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <Tabs>
          <TabList className="tabs-header">
            <Tab className="tab-btn">answerd</Tab>
            <Tab className="tab-btn">unanswered</Tab>
          </TabList>
          <TabPanel>
            <div id="answerd" >
              {
                unansweredQuestions.map(id =>
                  <div key={id}>
                    <Question id={id} />
                  </div>
                )
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div id="unanswered" >
              {
                answeredQuestions.map(id =>
                  <div key={id}>
                    <Question id={id} />
                  </div>
                )
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    )
  }


}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers)
  return {
    unansweredQuestions: Object.keys(questions).filter(qid => !answeredQuestions.includes(qid)),
    answeredQuestions
  }
}


export default connect(mapStateToProps)(DashBoard)