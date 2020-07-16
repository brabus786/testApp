import React from 'react';
import './Input.scss';

const Input = (props) => {
    return (
        <>
            <input
                onChange={props.InputSearch}
                placeholder='first-name'
            />
        </>
    );
};

export default Input;