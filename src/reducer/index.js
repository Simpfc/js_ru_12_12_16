import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filters from './filters'
import comments from './comments'
import langReducer from './lang'

export default combineReducers({
    lang: langReducer,
    count: counterReducer,
    articles: articlesReducer,
    filters, comments
})