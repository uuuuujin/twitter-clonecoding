import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';


// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // 원래 index부분 없어도 되는데 ssr위해서... (HYDRATE 사용위해)
  index: (state = {}, action) => {
    switch (action.type){
      case HYDRATE:
        return {...state, ...action.payload};
      default:
        return state;
   }
  },
  user,
  post,    
});

export default rootReducer;