import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link,Redirect } from "react-router-dom";
import QuestionResults from './QuestionResults';

class Question extends Component {

  
  render() {
    const { question,users,auth } = this.props;
const isAnswered = this.props.isAnswered;
    return (
     
      isAnswered?<QuestionResults {...this.props}/>:
      <Link style={{ textDecoration: 'none', color: 'black' }}  to={`/questions/${question.id}`} className='question'>
        <div className="question-container">
        <img className='flexed' src={users[question.author].avatarURL}  alt={`Avatar of ${users[question.author].name}`} />
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
    auth: state.authedUser,

  }
}

export default connect(mapStateToProps)(Question);