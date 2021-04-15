import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class Question extends Component {

  
  render() {
    const { question, auth } = this.props;
    return (

      <Link to={`/questions/${question.id}`} className='question'>
        <div>
          <ul>
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