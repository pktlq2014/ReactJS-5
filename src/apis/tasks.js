import axiosService from './../commons/axiosService.js/axiosService';
import {API_ENDPOINT} from './../constants/tasks';
const url = "tasks";
export const getListTasks = () => {
    // gọi qua hàm .get bên axiosService
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};