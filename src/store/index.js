import { configureStore } from 'redux';

const reducerMethod = ( state={ counter: 0}, action ) => {

}

const store = configureStore(reducerMethod);