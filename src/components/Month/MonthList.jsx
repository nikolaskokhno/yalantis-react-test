import React from 'react';

import LisstItem from './Month';

import './style.css';

const ListItems = ({items, handlerOnMouseOver}) => {
    return (
        <div className="list__month">
            <div>
            {
                Object.keys(items).map(monthIndex => (
                    <LisstItem
                        monthData={items[monthIndex]}
                        handlerOnMouseOver={handlerOnMouseOver}
                        key={monthIndex}
                    />
                ))
            }
            </div>
        </div>
    );

};

export default ListItems;