import React from 'react';
import './ListItem.scss';

const ListItem = ({ data, eventClick, activeId}) => {
    
    let classes = 'ListItem';
    if(activeId) classes = 'ListItem active'

    return (
        <div onClick={() => eventClick(data.id)} className={classes}>
            <span>{data.id}</span>
            <span>{data.first_name}</span>
            <span>{data.last_name}</span>
        </div>
    );
};

export default ListItem;