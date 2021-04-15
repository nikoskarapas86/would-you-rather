import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class Question extends Component {

  
  render() {
    const { question, auth } = this.props;
    return (

      <Link  style={{ textDecoration: 'none' }} to={`/questions/${question.id}`} className='question'>
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