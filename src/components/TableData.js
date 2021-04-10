import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class TableData extends Component {


    render() {
        const { users } = this.props;
        return (
    <div>table with data</div>
)
    }
}


function mapStateToProps({ users }) {
    return {
        users,
    };
}

export default connect(mapStateToProps)(TableData)