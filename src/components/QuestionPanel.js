import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component {

    render() {
        return (
            <div>
                Panel
            </div>

        )
    }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
    const answers = users[authedUser].answers;
    let answer, percOne, percTwo, total;
    const { id } = match.params;
    const question = questions[id];
    if (answers.hasOwnProperty(question.id)) {
        answer = answers[question.id]
    }
    const questionAuthor = users[question.author];
    total = question.optionOne.votes.length + question.optionTwo.votes.length;
    // percOne = financial((question.optionOne.votes.length / total) * 100);
    // percTwo = financial((question.optionTwo.votes.length / total) * 100);
    return {
        question,
        questionAuthor,
        answer,
        total,
        percOne,
        percTwo
    }
}

export default connect(mapStateToProps)(QuestionDetails)