import axios from 'axios';

export const getApi = async (page, searchObject) => {
    console.log(searchObject);
    try {
        const response = await axios.get(`https://gorest.co.in/public-api/users?_format=json&access-token=cxzNs8fYiyxlk708IHfveKM1z1xxYZw99fYE&page=${page}&first_name=${searchObject.name}&status=${searchObject.isActive}`);
        return response;
    } catch (e) {
        console.log(e);
    }
}


