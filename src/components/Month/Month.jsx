import React from 'react';
import { css } from "emotion";


const styleMonth = (count) => {
    if (count <= 2) {
        return 'grey';
    } else if (count >= 3 && count <= 6) {
        return 'blue';
    } else if (count >= 7 && count <= 10) {
        return 'green';
    } else if (count >= 11) {
        return 'red';
    }
}

const ListItem = ({monthData, handlerOnMouseOver}) => (
    <li className={css `background: ${styleMonth(monthData.count)}`} onMouseOver={() => {handlerOnMouseOver(monthData.children)}}>
        {monthData.monthName}
    </li>
);

export default ListItem;