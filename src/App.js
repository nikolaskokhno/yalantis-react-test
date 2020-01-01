import React from 'react';
import Header from './components/Header';
import './App.css';
import MonthList from './components/MonthList';

class App extends React.Component {


  render() {


    return (
      <div className="container-fluid">
        <Header />
        <MonthList />
      </div>
    );
  }
}

export default App;
