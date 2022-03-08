import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_URL } from '../../../common/API';
axios.defaults.baseURL = Base_URL;

axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('Access_Token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    // console.log(response)
    return response;
}, function (error) {
    console.log(error)
    if (error.response.status === 401) {
        console.log('Error Found')
    }
    return Promise.reject(error);
});
export const getList = () => async (dispatch) => {
    await axios.get(`api/userId=${value}`)
        .then((response) => {
            console.log("Response", response)
            dispatch({ type: "LIST", List: gettingData })
        })
        .catch((error) => {
            dispatch({ type: "LIST", List: [] })
        });
}
