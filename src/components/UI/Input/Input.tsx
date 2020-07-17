import React, {FC} from 'react';
import './Input.scss';

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}



const Input: FC<InputProps> = (props) => {
    return (
        <>
            <input
                onChange={props.onChange}
                placeholder='first-name'
            />
        </>
    );
};

export default Input;