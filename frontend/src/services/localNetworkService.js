import axiosClient from '../config/axios';

export const getDataFromLocalNetwork = async () => {
    let response =  await axiosClient.get('/local-network');
    return response;
}

