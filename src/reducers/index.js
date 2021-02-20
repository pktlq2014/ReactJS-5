// bước 1 là tạo cái combineReducer để combine all reducers lại
import { combineReducers } from "redux";
import tasks from './tasks';
import ui from './ui';
const rootReducers = combineReducers({
    tasks : tasks,
    ui : ui
});
export default rootReducers;
