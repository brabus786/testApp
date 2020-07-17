import React, { FC } from 'react';
import Search from './Search/Search';
import ListItem from './ListItem/ListItem';
import UserInfo from './UserInfo/UserInfo';
import './UserView.scss';


interface UserViewProps {
    isLoading: boolean;
    activeId: string | null;
    usersData: {
        id: string,
        first_name: string;
        last_name: string;
    }[];
    userObject: {
        address: string;
        dob: string;
        email: string;
        phone: string;
        status: string;
    }
    onUserSelect: (id: string) => void;
    InputSearch: (e: any) => void;
    SelectSearch: (e: any) => void;
}

const UsersView: FC<UserViewProps> = (props) => {
    let classes = 'user-view';
    if (props.isLoading) classes = 'user-view loading';

    const lists = props.usersData.map((data) => {
        let active = false;
        if (props.activeId === data.id) active = true;
        return (
            <div key={data.id}>
                <ListItem
                    data={data}
                    onClick={props.onUserSelect}
                    isActive={active}
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
                    useObject={props.userObject}
                />

            </div>
        </>
    );
};

export default UsersView;