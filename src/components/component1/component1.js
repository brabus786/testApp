import React from 'react';
import Search from '../Search/Search';
import ListItem from '../ListItem/ListItem';
import UserInfo from '../UserInfo/UserInfo';
import './component1.scss';


const component1 = (props) => {

    console.log(props.isLoading);

    let classes = 'component1';
    if (props.isLoading) classes = 'component1 loading';

    const lists = props.usersData.map((data) => {
        let active = false;
        if (props.activeId === data.id) active = true;
        return (
            <div key={data.id}>
                <ListItem
                    data={data}
                    eventClick={props.eventClick}
                    activeId={active}
                />
            </div>

        )
    })

    return (
        <>
            <Search
                InputSearch={props.InputSearch}
                SelectSearch={props.SelectSearch}
            />

            <div className={classes}>
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
        </>
    );
};

export default component1;