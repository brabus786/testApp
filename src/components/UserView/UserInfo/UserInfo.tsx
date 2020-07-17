import React, { FC } from 'react';
import './UserInfo.scss';

interface UserInfoProps {
    useObject: {
        address: string;
        dob: string;
        email: string;
        phone: string;
        status: string;
    }
}


const UserInfo: FC<UserInfoProps> = ({ useObject }) => {

    let userComponent = null;
    if (useObject !== null) {
        userComponent = (
            <div className='UserInfo'>
                <span>Addres</span>
                <span>{useObject.address}</span>
                <span>DOB</span>
                <span>{useObject.dob}</span>
                <span>Email</span>
                <span>{useObject.email}</span>
                <span>Phone</span>
                <span>{useObject.phone}</span>
                <span>Status</span>
                <span>{useObject.status}</span>
            </div>
        )
    }

    return (
        <>
            {userComponent}
        </>
    );
};

export default UserInfo;