import axios from 'axios';

import { API_URL } from '../../react-app-env.d';

export const registerUser = async (formData: object) => {
    const {data} = await axios({
        method: 'POST',
        url: `${API_URL}/users`,
        data: {
            user : formData
        }
        });
    return data;
}

export const loginUser = async (formData: object) => {
    const {data} = await axios({
        method: 'POST',
        url: `${API_URL}/users/sign_in`,
        data: {
            user : formData
        }
        });
    return data;
}

export const logOutUser = async () => {
    const {data} = await axios({
        method: 'DELETE',
        url: `${API_URL}/users/sign_out`,
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
        });
    return data;
}
