import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom';

class QuestionDetails extends Component {

    state = {
        selectedOption: '',
        redirection:false
    };

    radioSelected = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.selectedOption)
        this.props.handleAnswer(this.props.question.id,this.state.selectedOption)
        this.setState({
            redirection: e.target.value,
            redirection:true
        });
    };


    render() {
        const { question } = this.props;
        const { redirection } = this.state;
        const votesOptionOne = question.optionOne.votes.length;
        const votesOptionTwo = question.optionTwo.votes.length;
        const votesTotal = votesOptionOne + votesOptionTwo;
        const percentVotesOptionOne = (votesOptionOne / votesTotal).toFixed(2) * 100;
        const percentVotesOptionTwo = (votesOptionTwo / votesTotal).toFixed(2) * 100;

        const { selectedOption } = this.state;
        if (redirection === true) {
            return <Redirect to='/question' />
        }

        return (
            <div className="card-container">
                <form className="form-container">
                    <div>
                        <div className="radio-content">
                            <span>{question.optionOne.text}</span>
                            <input className="radio"
                             type="radio" name="radio1"
                              value="optionOne" 
                            
                              onChange={this.radioSelected} />{' '}
                            {/* {answered && <span className='stats'>
                                Votes: {question.optionTwo.votes.length} ({percentVotesOptionTwo}%)
                            </span>} */}
                        </div>
                        <div className="radio-content">
                            <span >{question.optionTwo.text}</span>
                            <input className="radio" type="radio"
                             name="radio1" value="optionTwo" 
                        
                             onChange={this.radioSelected} />{' '}
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

export default connect(mapStateToProps,{handleAnswer})(QuestionDetails)