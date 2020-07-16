import React from 'react';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import './Search.scss';

const Search = (props) => {
    return(
        <div className='search'>
            <Input  
                InputSearch={props.InputSearch}
            />
            <Select 
                SelectSearch={props.SelectSearch}
            />
        </div>
    );
};

export default Search;