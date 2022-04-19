import { createStore } from 'redux';

// import { configureStore } from '@reduxjs/toolkit';

const reducerMethod = (state = { counter: 10 }, action) => {

    if (action.type === 'INC') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'DEC') {
        return {
            counter: state.counter - 1
        };
    }

    if (action.type === 'ADD') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
}

// const store = configureStore(reducerMethod);

const store = createStore(reducerMethod);

export default store;