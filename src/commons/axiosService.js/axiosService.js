import axios from 'axios';
class axiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }
    handleSuccess(response) {
        return response;
    }
    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }
}
// mỗi lần toán tử new được dùng thì constructor sẽ chạy đầu tiên
export default new axiosService();