import axiosClient from '../config/axios';

export const getDataFromConfigFile = async () => {
    let response =  await axiosClient.get(`/config-file`);
    return response;
}

export const updateDataFromConfigFile = async (data) => {
    return await axiosClient.put(`/config-file`,data);
}