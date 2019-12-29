import api from '../../../api/index'
const API = new api()
const listUrl = 'http://test.guodada.fun/api/article/list';
const tagUrl = 'http://test.guodada.fun/api/tag/list';

function list(data) {
    return API.get(listUrl, data)
}

function tag(data) {
    return API.get(tagUrl, data)
}


export default {
    list,
    tag
}