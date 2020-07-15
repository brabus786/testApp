import React from 'react';
import ListItem from '../ListItem/ListItem';
import UserInfo from '../UserInfo/UserInfo';
import './component1.scss';


const component1 = (props) => {

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
            <div>
                <div className='columnName'>
                    <span>ID</span>
                    <span>First-name</span>
                    <span>Last-name</span>
                </div>
                {lists}
            </div>

            <UserInfo
                useObject={props.useObject}
            />
        </div>
    );
};

export default component1;