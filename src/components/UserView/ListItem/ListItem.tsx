import React, { FC } from 'react';
import './ListItem.scss';


interface ListItemProps {
    data: {
        id: string;
        first_name: string;
        last_name: string;
    };
    onClick: (id: string) => void;
    isActive: boolean;
}

const ListItem: FC<ListItemProps> = ({ data, onClick, isActive }) => {

    let classes = 'ListItem';
    if (isActive) classes = 'ListItem active'

    return (
        <div onClick={() => onClick(data.id)} className={classes}>
            <span>{data.id}</span>
            <span>{data.first_name}</span>
            <span>{data.last_name}</span>
        </div>
    );
};

export default ListItem;