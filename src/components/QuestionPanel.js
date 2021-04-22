import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class QuestionPanel extends Component {

    state = {
        selectedOption: '',
        redirection: false
    };

    radioSelected = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAnswer(this.props.question.id, this.state.selectedOption)
        this.setState({
            redirection: e.target.value,
            redirection: true
        });
    };


    render() {
        const { question, users } = this.props;
        const { redirection } = this.state;
        const { selectedOption } = this.state;
        if (question === undefined) {
            return <Redirect to='/error' />
        }
        if (redirection === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="card-container">
                <form className="form-container">
                    <img className='flexed' src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} />
                    <h3>Would you rather :</h3>
                    <div>
                        <div className="radio-content">
                            <span>{question.optionOne.text}</span>
                            <input className="radio"
                                type="radio" name="radio1"
                                value="optionOne"

                                onChange={this.radioSelected} />{' '}

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

function mapStateToProps({ questions, users }, { match }) {

    const { id } = match.params;
    const question = questions[id];



    return {
        question,
        users

    }
}

export default connect(mapStateToProps, { handleAnswer })(QuestionPanel)