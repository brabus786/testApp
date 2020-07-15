import React from 'react';
import './ListItem.scss';

const ListItem = ({ data, eventClick}) => {
    console.log(data);

    return (
        <div onClick={() => eventClick(data.id)} className='ListItem'>
            <span>{data.id}</span>
            <span>{data.first_name}</span>
            <span>{data.last_name}</span>
        </div>
    );
};

export default ListItem;