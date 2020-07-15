import React, { useEffect } from 'react';
import Component1 from './components/component1/component1';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../src/store/actions/getData';
import { getApi } from '../src/UTILS/api';
import './styles/App.css';


const App = () => {

    const setUsers = useDispatch();
    const usersData = useSelector(state => state.getData);

    const getUsers = async () => {
        const get = await getApi(1);
        setUsers(getData(get));
    }

    const getDataUser = (id) => {
        console.log(id);
    }
    
    useEffect(() => {
        getUsers();
    },[]);


    return (
        <div>
            <Component1 
                usersData={usersData}
                eventClick={getDataUser}
            />
        </div>
    );
};

export default App;