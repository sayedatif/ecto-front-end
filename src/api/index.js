import request from "../request";

export const fetchInitAPI = () => request.get('/');
export const fetchTypeAPI = (type, params) => request.get(`/${type}`, { params })