import React from 'react';
import { css } from "emotion";


const styleMonth = (count) => {
    if (count <= 2) {
        return 'linear-gradient(rgb(73, 73, 73), rgb(201, 201, 201))';
    } else if (count >= 3 && count <= 6) {
        return 'linear-gradient(rgb(18, 1, 116), rgb(61, 27, 255))';
    } else if (count >= 7 && count <= 10) {
        return 'linear-gradient(rgb(116, 1, 7), rgb(255, 27, 57))';
    } else if (count >= 11) {
        return 'linear-gradient(rgb(1, 116, 20), rgb(35, 255, 27))';
    }
}

const ListItem = ({monthData, handlerOnMouseOver}) => (
    <li className={css `background: ${styleMonth(monthData.count)}`} onMouseOver={() => {handlerOnMouseOver(monthData.children)}}>
        {monthData.monthName}
    </li>
);

export default ListItem;