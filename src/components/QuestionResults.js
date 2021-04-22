import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
    primary: {
        color: 'green',
       
    },
    secondary: {
        color: 'grey',
     
    }
};
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
class QuestionResults extends Component {
   
    render() {
        const { question } = this.props;

        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const votesTotal = optionOneVotes + optionTwoVotes;
       let percentOne = financial((question.optionOne.votes.length / votesTotal) * 100);
       let percentTwo = financial((question.optionTwo.votes.length / votesTotal) * 100);
        let firstOption = styles.secondary,
            secondOption = styles.secondary;
        if (optionOneVotes > optionTwoVotes) {
            firstOption = styles.primary;
        } else if (optionTwoVotes > optionOneVotes) {
            secondOption = styles.primary;
        }
        return (
            <div className="question-container">
                <h3>Results : </h3>
                <span style={{ fontWeight: 'bold',  color:firstOption.color }}>option one : {question.optionOne.text}  has {optionOneVotes} out of {votesTotal} votes</span>
                <span style={{ fontWeight: 'bold',  color:firstOption.color }}>{percentOne + '%'}</span>
              
                <span style={{ fontWeight: 'bold',  color:secondOption.color }}>option two :{question.optionTwo.text} has {optionTwoVotes} out of {votesTotal} votes</span>
                <span style={{ fontWeight: 'bold',  color:firstOption.color }}>{percentTwo + '%'}</span>
               
            </div>
        )
    }

}


export default connect()(QuestionResults)