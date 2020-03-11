import superagentPromise from "superagent-promise";
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_URL = "https://apidev.frood.tech/api";

const requests = {
    get: (url) => superagent.get(`${API_URL}${url}`).then(res => res.body),
    post: (url, payload) => superagent.post(`${API_URL}${url}`, payload).then(res => res.body)
};

const Auth = {
    login: (email, password) => requests.post('/login', { username: email, password: password})
}

export default { Auth };