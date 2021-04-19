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
        console.log('wewewewewe')
        this.props.saveQuestionAnswer(this.state.selectedOption);
    };


    render() {
        console.log('-==-=--==-')
        const { question, questionAuthor, answers, total, percOne, percTwo } = this.props;
        // const answered = answers.indexOf(question.id) > -1 ? true : false;
        const votesOptionOne = question.optionOne.votes.length;
        const votesOptionTwo = question.optionTwo.votes.length;
        const votesTotal = votesOptionOne + votesOptionTwo;
        const percentVotesOptionOne = (votesOptionOne / votesTotal).toFixed(2) * 100;
        const percentVotesOptionTwo = (votesOptionTwo / votesTotal).toFixed(2) * 100;

        const { selectedOption } = this.state;
        return (
            <div className="card-container">
                <form className="form-container">
                    <div>
                        <div className="radio-content">
                            <span>{question.optionOne.text}</span>
                            <input className="radio" type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                            {/* {answered && <span className='stats'>
                                Votes: {question.optionTwo.votes.length} ({percentVotesOptionTwo}%)
                            </span>} */}
                        </div>
                        <div className="radio-content">
                            <span >{question.optionTwo.text}</span>
                            <input className="radio" type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                        </div>
                    </div>


                    <button className='btn' type="button" disabled={selectedOption === ''} onClick={(event) => this.handleSubmit(event)}>Submit</button>
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