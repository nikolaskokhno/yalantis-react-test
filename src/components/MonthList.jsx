import React from 'react';

class MonthList extends React.Component {

    months = [
        {id: 1, name: "January"},
        {id: 2, name: "February"},
        {id: 3, name: "March"},
        {id: 4, name: "April"},
        {id: 5, name: "May"},
        {id: 6, name: "June"},
        {id: 7, name: "July"},
        {id: 8, name: "August"},
        {id: 9, name: "September"},
        {id: 10, name: "October"},
        {id: 11, name: "November"},
        {id: 12, name: "December"}
    ]

    /*todo
        method show month,
        method filter month,
        method style for month
    */
    

    render () {

        const showMonth = this.months.map (el => <li>{el.name}</li>)

        return (
            <div className="month-list">
                <ul>
                    {showMonth}
                </ul>
            </div>
        );
    }
}

export default MonthList;