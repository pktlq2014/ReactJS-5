// bước 1 là tạo cái combineReducer để combine all reducers lại
import { combineReducers } from "redux";
import tasks from './tasks';
const rootReducers = combineReducers({
    tasks : tasks
});
export default rootReducers;
