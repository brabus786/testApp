import React, { useEffect, useState } from 'react';
import Component1 from './components/component1/component1';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../src/store/actions/getData';
import { getApi, userCount } from '../src/UTILS/api';
import './styles/App.css';


const App = () => {

    const [useObject, setUserObject] = useState(null);
    const [count, setCount] = useState(0);
    const setUsers = useDispatch();
    const usersData = useSelector(state => state.getData);

    const getUsers = async (count) => {
        const get = await getApi(count);
        console.log(get);
        setCount(get.data._meta.pageCount);
        setUsers(getData(get));
    }

    const getDataUser = (id) => {
        const user = usersData.filter(data => data.id === id);
        setUserObject(user)
    }

    const pagginationHandler = (e) => {
        getUsers(e.selected + 1);
    }


    return (
        <div>
            <Component1
                usersData={usersData}
                eventClick={getDataUser}
                useObject={useObject}
            />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={count - 1}
                pageCount={count}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
            />
        </div>
    );
};

export default App;