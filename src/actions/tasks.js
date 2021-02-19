import * as tasksApi from './../apis/tasks';
import * as taskConstants from './../constants/tasks';
export const fetchList = () => {
    return {
        type : taskConstants.FETCH_TASKS,
    };
};
export const fetchListSuccess = (data) => {
    return {
        type : taskConstants.FETCH_TASKS_SUCCESS,
        payload : {
            data : data
        },
    };
};
export const fetchListFailed = (error) => {
    return {
        type : taskConstants.FETCH_TASKS_FAILED,
        payload : {
            error : error
        },
    };
};
/* 
b1: vào fetchListTask
b2: reset: state tasks = [] dùng -> fetchList (nằm ở trên)
b3: fetchListTaskSuccess(data response)

*/
export const fetchListTask = () => {
    return dispatch => {
        dispatch(fetchList());
        // khi gọi api thành công sẽ đi vào .then
        tasksApi.getListTasks().then(resp => {
            console.log(resp);
            const {data} = resp;
            dispatch(fetchListSuccess(data));
        }).catch(error => {
            console.log('error: ' + error);
            dispatch(fetchListFailed(error));
        });
    };
};