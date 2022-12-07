import { API_URL } from "../../react-app-env.d";
import axios from "axios";

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
