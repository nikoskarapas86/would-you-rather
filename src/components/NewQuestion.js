import React, { Component } from 'react'
import { connect } from 'react-redux'


class NewQuestion extends Component {
    state = {
        questionOne: '',
        questionTwo: ''
    };


    handleChange = (event, optionIndex) => {
        const text = event.target.value;

        this.setState(function (previousState) {
            return optionIndex === 1
                ? { ...previousState, 'questionOne': text }
                : { ...previousState, 'questionTwo': text };
        });
    }


    render() {
        const { questionOne, questionTwo } = this.state;
        const { authedUser, users } = this.props;
        console.log(authedUser)
        console.log(users)

        return (

            <div>
                <h2>add a new question</h2>
                <img
                    src={`/${users[authedUser].avatarURL}`}
                    alt={`Avatar of ${authedUser}`}
                />
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <input
                            value={questionOne}
                            onChange={(event) => this.handleChange(event, 1)} />
                    </div>
                    <div>
                        <input
                            value={questionTwo}
                            onChange={(event) => this.handleChange(event, 2)} />

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


export default connect(mapStateToProps)(NewQuestion)