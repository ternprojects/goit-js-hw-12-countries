import debounce from 'lodash.debounce';
import refs from './refs.js';
import api from './api';

refs.search.addEventListener(
  'input',
  debounce(() => {
    api(refs.search.value);
  }, 400),
);
