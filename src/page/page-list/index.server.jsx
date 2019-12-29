import api from '../../api/index'
const API = new api()
const articleListUrl = 'http://test.guodada.fun/api/article/list';

function articleList(data) {
    return API.get(articleListUrl, data)
}

export default {
    articleList
}