import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
    state = {
        questionOne: '',
        questionTwo: ''
    };



    handleFirstChange = (event) => {
        event.preventDefault();
        this.setState({
            questionOne : event.target.value
        })
      };

      handleSecondChange = (event) => {
        event.preventDefault();
        this.setState({
            questionTwo : event.target.value
        })
      };

    handleSubmit =(event)=>{
        event.preventDefault();
        const { questionOne, questionTwo } = this.state;
        this.props.addQuestion(questionOne, questionTwo)
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
                            onChange={ this.handleFirstChange} />
                    </div>
                    <div>
                        <input
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

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion)