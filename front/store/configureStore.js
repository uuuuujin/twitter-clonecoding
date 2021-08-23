import { applyMiddleware, compose, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index'

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    return store;
}

const wrapper = createWrapper(configureStore, { 
    // debug 부분이 true이면 리덕스에 대해 자세한 설명이 나와서 true로 놓는거 추천.
    debug: false
    // debug: process.env.NODE_ENV === 'development'
});

export default wrapper;