import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component {

    state = {
        selectedOption: ''
    };

    radioSelected = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveQuestionAnswer(this.state.selectedOption);
    };

    
    render() {

        const { question, questionAuthor, answer, total, percOne, percTwo } = this.props;
        const { selectedOption } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <span>{question.optionOne.text}</span>
                        <input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                    </div>
                    <div >
                        <span >{question.optionTwo.text}</span>
                        <input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                    </div>

                    <button disabled={selectedOption === ''}>Submit</button>
                </form>
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