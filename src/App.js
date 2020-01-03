import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from './components/Header/Header';
import ListItems from "./components/Month/MonthList";
import ListUsers from "./components/User/UserList";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [users, stateUsers] = useState([]);
    const [months, stateMonth] = useState({});

    const arrayMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const getListUser = (el) => {
        let usersState = [];
        let months = getUserList();
    
        el.map(user => {
            if (user.dob) {
                let data = new Date(user.dob);
                let month = data.getMonth();
                let monthIndex = month;
    
                usersState.push(user);
                months[monthIndex]['count']++;
                months[monthIndex]['children'].push(user);
            }
            return user;
        });
    
        return {usersState, months}
    }

    const getUserList = () => {
        const newUserList = {};
    
        for (let i = 0; i < arrayMonths.length; i++) {
            newUserList[i] = {
                children: [],
                count: 0,
                monthName: arrayMonths[i],
            };
        }
    
        return newUserList;
    }

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';
            const result = await axios(url);
            
            let {usersState, months} = getListUser(result.data);

            stateUsers(usersState);
            stateMonth(months);
        };
        fetchData();
    }, []); 

    return (
        <div className='content'>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 pt-5 month__list">
                        <ListItems items={months} handlerOnMouseOver={stateUsers} />
                    </div>
                    <div className="pt-5 col-md-10 users-section">
                        <ListUsers users={users} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
