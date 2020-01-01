import React from 'react';

class UserList extends React.Component {

    state = {
        loading: true,
        user: null
    }

    async componentDidMount () {
        const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({user: data, loading: false}); 
    }

    render () {

        if (this.state.loading) {
            return (
                <div className="loading">
                    loading...
                </div>
            );
        }

        if (!this.state.user) {
            return (
                <div className="user__data">
                    didn't get a user...
                </div>
            );
        }

        return (
            <div className="user__list">
                <ul>
                    {this.state.user.map(user => <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>)}
                </ul>
            </div>
        );
    }
}

export default UserList;