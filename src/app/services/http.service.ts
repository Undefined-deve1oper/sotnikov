import axios, { AxiosRequestConfig } from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";

const http = axios.create({
    baseURL: configFile.apiEndPoint
});

http.interceptors.request.use(
    async function (config: AxiosRequestConfig): Promise<any> {
        // Заготовка на будущее
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// На случай использования fireBase надо будет трансформировать данные
function transformData(data: any) {
    return data && !data.id && !data.ip
        ? Object.keys(data).map((key) => ({
            ...data[key]
        }))
        : data;
}

http.interceptors.response.use(
    (res) => {
        if (configFile.isFireBase) {
            res.data = { content: transformData(res.data) };
        }
        res.data = { content: res.data };
        return res;
    },
    function (error) {
        // Отлавливаем неожиданные ошибки
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};

export default httpService;
