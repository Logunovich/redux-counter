import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './components/counter';
import App from './components/app';

const store = createStore(reducer);

// const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', ()=> {
//   const value = Math.floor(Math.random() * 30);
//   rnd(value);
// });



// const update = () => {
  

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));


  // }
// update();


// store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});


// let staate = reducer(undefined, {});

// staate = reducer(staate, {type: 'INC'});

// console.log(staate);

// staate = reducer(staate, {type: 'INC'});

// console.log(staate);

