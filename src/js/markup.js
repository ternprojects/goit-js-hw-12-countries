import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import listItemTemp from '../templates/list-items.hbs';
import descrListITemp from '../templates/description.hbs';
import refs from './refs.js';

const options = {
  title: 'Too many matches found',
  text: 'Please, do a more specific query!',
  width: '450px',
  minHeight: '12px',
  autoOpen: true,
  icon: true,
  closer: false,
  sticker: false,
  remove: true,
  delay: 200,
};

const inspection = {
  name: '',
};

function markup(countries) {
  if (inspection.name === countries[0].name && countries.length === 1) {
    return;
  } else {
    if (countries.length > 10) {
      inspection.name = '';
      refs.headArea.innerHTML = '';
      error(options);
    }
    if (countries.length >= 2 && countries.length <= 10) {
      inspection.name = '';
      const listItemsMarkup = listItemTemp(countries);
      refs.headArea.innerHTML = listItemsMarkup;
    }
    if (countries.length === 1) {
      inspection.name = countries[0].name;
      const descrListMarkup = descrListITemp(countries);
      refs.headArea.innerHTML = descrListMarkup;
    }
  }
}

export {
  markup,
  inspection
};
