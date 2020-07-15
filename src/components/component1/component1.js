import React from 'react';
import ListItem from '../ListItem/ListItem';
import './component1.scss';


const component1 = (props) => {
    console.log(props);

    const lists = props.usersData.map((data) => {
        return (
            <div key={data.id}>
                <ListItem
                    data={data}
                    eventClick={props.eventClick}
                />
            </div>

        )
    })

    return (
        <div className='component1'>
            <div className='columnName'>
                <span>ID</span>
                <span>First-name</span>
                <span>Last-name</span>
            </div>
            {lists}
        </div>
    );
};

export default component1;