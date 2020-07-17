import React, {FC} from 'react';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import './Search.scss';

interface SearchProps {
    InputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    SelectSearch: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Search: FC<SearchProps> = (props) => {
    return(
        <div className='search'>
            <Input  
                onChange={props.InputSearch}
            />
            <Select 
                onChange={props.SelectSearch}
            />
        </div>
    );
};

export default Search;