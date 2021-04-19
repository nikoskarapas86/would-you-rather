import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        questionOne: '',
        questionTwo: '',
        redirection: false,
    };



    handleFirstChange = (event) => {
        event.preventDefault();
        this.setState({
            questionOne: event.target.value
        })
    };

    handleSecondChange = (event) => {
        event.preventDefault();
        this.setState({
            questionTwo: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { questionOne, questionTwo } = this.state;
        this.props.addQuestion(questionOne, questionTwo)
        this.setState(function (previousState) {
            return {
                ...previousState,
                redirection: true,
            };
        })
    }
    render() {
        const { questionOne, questionTwo, redirection } = this.state;
        const { authedUser, users } = this.props;
        console.log(authedUser)
        console.log(users)

        if (redirection === true) {
            return <Redirect to='/table' />
        }

        return (

            <div className="card-container">
                <span className="card-header">
                <h3>add a new question</h3>
                <img
             src={`${users[authedUser].avatarURL}`}
                    alt={`Avatar of ${authedUser}`}
                />
                </span>
                
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="text">
                        <label >first choise</label >
                        <textarea
                            value={questionOne}
                            onChange={this.handleFirstChange} />
                    </div>
                    <div className="text">
                    <label >second choise</label >
                        <textarea
                            value={questionTwo}
                            onChange={this.handleSecondChange} />

                    </div>
                    <button
                        className='btn'
                        type='submit'
                        disabled={questionOne === '' || questionTwo === ''}
                    >
                        Submit
            </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (optionOne, optionTwo) => {
            dispatch(handleAddQuestion(optionOne, optionTwo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)