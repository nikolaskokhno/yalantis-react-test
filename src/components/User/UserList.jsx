import React from 'react';
import Item from "./User";

import './style.css';

const ListUsers = ({users}) => {
    return (
        <ul className="user__list">
            <div className="row">
                {
                    users.map((user, key) => (               
                        <Item user={user} key={key} position={++key} /> 
                    ))
                }
            </div>
        </ul>
    );
};

export default ListUsers;