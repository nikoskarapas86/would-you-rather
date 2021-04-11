import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetUser } from '../actions/unsetUser'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(unsetUser())
  }
  render () {
    return <Redirect to='/' />
  }
}

export default connect()(Logout)
