import React from "react";

const Item = ({user}) => (
    <li className="col-md-3">
        <img className="pl-3 pr-3" src={require('../../assets/img/user.png')} alt="about img"/>
        {user.firstName + ' ' + user.lastName}
    </li>
);

export default Item;