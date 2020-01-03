import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from './components/Header/Header';
import ListItems from "./components/Month/MonthList";
import ListUsers from "./components/User/UserList";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [usersMonth, newArrMonth] = useState({});

    const arrayMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const getListUser = (el) => {
        let usersState = [];
        let usersMonth = userList();
    
        el.map(user => {
            if (user.dob) {
                let month = Number(user.dob[5] + user.dob[6]);
                let monthIndex = month - 1;
    
                usersState.push(user);
                usersMonth[monthIndex]['count']++;
                usersMonth[monthIndex]['children'].push(user);
            }
            return user;
        });
    
        return {usersState, usersMonth}
    }

    const userList = () => {
        const newUserList = {};
    
        for (let i = 0; i <= 11; i++) {
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
            
            let {usersState, usersMonth} = getListUser(result.data);

            setUsers(usersState);
            newArrMonth(usersMonth);
        };
        fetchData();
    }, []); 

    return (
        <div className='content'>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 pt-5 month__list">
                        <ListItems items={usersMonth} handlerOnMouseOver={setUsers} />
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
