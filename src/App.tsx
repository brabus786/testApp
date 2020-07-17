import React, { useState } from 'react';
import UserView from './components/UserView/UserView';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './store/actions/users';
import { getUsers } from './utils/api';
import './styles/App.css';
import { RootState } from './store/reducer';

const App = () => {
    const [userObject, setUserObject] = useState<null | any>(null);
    const [activeId, setActiveId] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchObject, setSearchObject] = useState({ name: '', isActive: '' });
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const usersData = useSelector((state: RootState) => state.users);

    const fetchUsers = async (pageNumber: number, searchObject: { name: string, isActive: string }) => {
        setIsLoading(true);
        setUserObject(null);
        setActiveId(null);
        const { data } = await getUsers(pageNumber, searchObject);
        const users: any = data;
        setCount(users._meta.pageCount);
        dispatch(setUsers(users));
        setIsLoading(false);
    }

    const InputSearch = (e: any) => {
        const newSearchObject = { ...searchObject };
        newSearchObject.name = e.currentTarget.value;
        setSearchObject(newSearchObject);
        fetchUsers(1, newSearchObject);
    };

    const SelectSearch = (e: any) => {
        const newSearchObject = { ...searchObject };
        newSearchObject.isActive = e.currentTarget.value;
        setSearchObject(newSearchObject);
        fetchUsers(1, newSearchObject);
    };

    const getOneUser = (id: string) => {
        const user = usersData.find(data => data.id === id);
        setUserObject(user);
        setActiveId(id);
    };

    const pagginationHandler = (e: any) => {
        console.log(1)
        fetchUsers(e.selected + 1, searchObject);
    };


    return (
        <div>
            <UserView
                usersData={usersData}
                onUserSelect={getOneUser}
                userObject={userObject}
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
                // subContainerClassName={'pages pagination'}
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