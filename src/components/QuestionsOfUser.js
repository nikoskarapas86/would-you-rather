import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import { Tabs } from 'react-tabs';
import { TabList } from 'react-tabs';
import { Tab } from 'react-tabs';
import { TabPanel } from 'react-tabs';


class DashBoard extends Component {



  render() {
    const { unansweredQuestions, answeredQuestions,users } = this.props;
 
    return (
    
  
      <div>
        <Tabs>
          <TabList className="tabs-header">
            <Tab className="tab-btn">unanswered</Tab>
            <Tab className="tab-btn">answered</Tab>
          </TabList>
          <TabPanel>
            <div id="unanswerd" >
              {
                unansweredQuestions.map(id =>
                  <div key={id}>
                    <Question isAnswered={false} id={id} users={users} />
                  </div>
                )
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div id="answered" >
              {
                answeredQuestions.map(id =>
                  <div key={id}>
                    <Question isAnswered={true} id={id} users={users} />
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
  const answeredQuestions = Object.keys(user.answers).sort((a, b) => b.timestamp - a.timestamp);
  return {
    unansweredQuestions: Object.keys(questions).filter(qid => !answeredQuestions.includes(qid)).sort((a, b) => b.timestamp - a.timestamp),
    answeredQuestions,
    users
  }
}


export default connect(mapStateToProps)(DashBoard)