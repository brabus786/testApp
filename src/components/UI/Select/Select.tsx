import React, {FC} from 'react';
import './Select.scss';

interface SelectProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = (props) => {
    return (
        <>
            <select onChange={props.onChange}>
                <option></option>
                <option>active</option>
                <option>inactive</option>
            </select>
        </>
    );
};

export default Select;