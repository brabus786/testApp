import axios from 'axios';

export const getApi = async (page) => {
    try {
        const response = await axios.get(`https://gorest.co.in/public-api/users?_format=json&access-token=cxzNs8fYiyxlk708IHfveKM1z1xxYZw99fYE&page=${page}`);
        return response;
    } catch (e) {
        console.log(e);
    }
}


