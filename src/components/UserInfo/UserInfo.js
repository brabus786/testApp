import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ useObject }) => {
    console.log(useObject);

    let userComponent = null;
    if (useObject !== null) {
        userComponent = (
            <div className='UserInfo'>
                <span>Addres</span>
                <span>{useObject[0].address}</span>
                <span>DOB</span>
                <span>{useObject[0].dob}</span>
                <span>Email</span>
                <span>{useObject[0].email}</span>
                <span>Phone</span>
                <span>{useObject[0].phone}</span>
                <span>Status</span>
                <span>{useObject[0].status}</span>
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