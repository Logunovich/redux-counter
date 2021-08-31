import {createStore} from 'redux';

const btnInc = document.querySelector('#inc'),
      btnDec = document.querySelector('#dec'),
      btnRes = document.querySelector('#res'),
      counter = document.querySelector('#counter');


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC': 
      return state - 1;
    case 'RES':
      return state = 0;
    default:
      return state;
  }
}

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

btnInc.addEventListener('click', () => {
  store.dispatch(inc())
})

btnDec.addEventListener('click', () => {
  store.dispatch(dec())
})

btnRes.addEventListener('click', () => {
  store.dispatch(res())
})

const update = () => {
  counter.textContent = store.getState();
}

store.subscribe(update)

  
