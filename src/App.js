import React from 'react';
import Header from './components/Header';
import './App.css';
import MonthList from './components/MonthList';
import UserList from './components/UserList';

class App extends React.Component {


  render() {


    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-3">
            <MonthList />
          </div>
          <div className="user__block">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
