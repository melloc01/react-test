import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const reducers = combineReducers({
    posts: PostsReducer
});

export default reducers;