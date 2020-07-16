import React, { useEffect, useState } from 'react';
import Component1 from './components/component1/component1';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../src/store/actions/getData';
import { getApi } from '../src/UTILS/api';
import './styles/App.css';


const App = () => {

    const [useObject, setUserObject] = useState(null);
    const [activeId, setActiveId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchObject, setSearchObject] = useState({name:'',isActive:''});
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.getData);

    const getUsers = async (pageNumber, searchObject) => {
        setIsLoading(true);
        setUserObject(null);
        setActiveId(null);
        const get = await getApi(pageNumber, searchObject);
        setCount(get.data._meta.pageCount);
        dispatch(getData(get));
        setIsLoading(false);
    } 

    const InputSearch = (e) => {
        const newSearchObject = {...searchObject};
        newSearchObject.name = e.currentTarget.value;
        setSearchObject(newSearchObject);
        getUsers(1, newSearchObject);
    };
    
    const SelectSearch = (e) => {
        const newSearchObject = {...searchObject};
        newSearchObject.isActive = e.currentTarget.value;
        setSearchObject(newSearchObject);
        getUsers(1, newSearchObject);
    };

    const getDataUser = (id) => {
        const user = usersData.filter(data => data.id === id);
        setUserObject(user);
        setActiveId(id);
    };

    const pagginationHandler = (e) => {
        getUsers(e.selected + 1, searchObject);
    };


    return (
        <div>
            <Component1
                usersData={usersData}
                eventClick={getDataUser}
                useObject={useObject}
                activeId={activeId}
                isLoading={isLoading}
                InputSearch={InputSearch}
                SelectSearch={SelectSearch}
            />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                initialPage={0}
                pageCount={count}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
            />
        </div>
    );
};

export default App;