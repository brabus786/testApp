import React from 'react';
import './Select.scss';

const Select = (props) => {
    return (
        <>
            <select onChange={props.SelectSearch}>
                <option></option>
                <option>active</option>
                <option>inactive</option>
            </select>
        </>
    );
};

export default Select;