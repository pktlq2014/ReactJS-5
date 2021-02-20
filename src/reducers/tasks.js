import * as taskConstants from './../constants/tasks';
// var initialState = {
//     listTask: [],
// };
var initialState = []
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case taskConstants.FETCH_TASKS: {
            // return {
            //     ...state,
            //     listTask: [],
            // };
            return state;
        }
        case taskConstants.FETCH_TASKS_SUCCESS: {
            var {data} = action.payload;
            // return {
            //     ...state,
            //     listTask: data,
            // };
            state = data;
            return state;
        }
        case taskConstants.FETCH_TASKS_FAILED: {
            // return {
            //     ...state,
            //     listTask: [],
            // };
            const {error} = action.payload;
            toasterror(error);
            return state;
        }
        default : return state;
    }
};
export default reducer;