import { default as defaultAxios } from "axios";

const axios = ((options) => defaultAxios.create(options))({ timeout: 20000 * 3 });

axios.all = defaultAxios.all;
axios.interceptors.request.use((config) => {
    if (config.method.toUpperCase() === "GET" && config.params) {
        let queryParams = {};
        Object.keys(config.params).forEach((key) => (queryParams[key] = JSON.stringify(config.params[key])));
        config.params = queryParams;
    }

    return config;
});

const http = {
    get: (url, params, config) => sumTryCatch(axios({ method: "GET", url, params, ...config })),
    post: (url, data, config) => sumTryCatch(axios({ method: "POST", url, data, ...config })),
    put: (url, data, config) => sumTryCatch(axios({ method: "PUT", url, data, ...config })),
    delete: (url, data, config) => sumTryCatch(axios({ method: "DELETE", url, data, ...config })),
    all: axios.all,
};

global.http = http;

export default http;
