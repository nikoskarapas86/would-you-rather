import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class Question extends Component {

  
  render() {
    const { question, auth } = this.props;
    console.log('option')
   console.log(question.optionTwo.votes.length.votes>0)
   console.log(question.optionOne.votes.length)
   let isAnswered=question.optionOne.votes.length>0 && question.optionTwo.votes.length>0
    return (

      <Link onClick={e => isAnswered? e.preventDefault():null}  style={{ textDecoration: 'none' }} to={`/questions/${question.id}`} className='question'>
        <div className="question-container">
          <ul className="question">
            <li >{question.optionOne.text}</li>
            <li>{question.optionTwo.text}</li>
          </ul>
        </div>
      </Link>


    );
  }

}

function mapStateToProps(state, { id }) {
  return {
    question: state.questions[id],
    auth: state.authedUser
  }
}

export default connect(mapStateToProps)(Question);