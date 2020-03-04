import request from "../request";

export const fetchInitAPI = () => request.get('/');
export const fetchTypeAPI = params => request.get(`/${params}`)