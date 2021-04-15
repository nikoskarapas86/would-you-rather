import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableData extends Component {


    render() {
        const { users } = this.props;
        const keys =Object.keys(users);
        const usersArray =[];
        keys.forEach(key => {usersArray.push(users[key])});
        return (
            <div className="card-container">
                <div>table with data</div>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Profile</th>
                            <th>User</th>
                            <th>Questions Asked</th>
                            <th>Questions Answered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersArray.map((user, index) => (
                        
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td><img src={user.avatarURL}  alt={`Avatar of ${user.name}`} /></td>
                                <td>{user.name}</td>
                                <td>{user.questions.length}</td>
                                <td>{Object.keys(user.answers).length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users,
    };
}

export default connect(mapStateToProps)(TableData)