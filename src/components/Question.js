import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Question extends Component {

    loadQuestionDetails(e, id) {
        let path = '/question/'+id;
        console.log(path)
        return <Redirect  push to={`/question/${id}`}  />
      }

    render() {
        const {question, auth} = this.props;
        return (
          <div onClick={(e) => this.loadQuestionDetails(e, question.id)}>
            <div>
              <ul>
                <li >{question.optionOne.text}</li>
                <li>{question.optionTwo.text}</li>
              </ul>
            </div>
          </div>
        );
      }

}

function mapStateToProps (state, { id }) {
    return {
      question : state.questions[id],
      auth: state.authedUser
    }
  }

export default connect(mapStateToProps)(Question);