import { markup, inspection } from './markup.js';
import refs from './refs';

function api(searchQuery) {
  const baseUrl = `https://restcountries.eu/rest/v2/name/`;
  const value = searchQuery;
  const fullUrl = baseUrl + value;
  return fetch(fullUrl)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error(`${res.status} This value does not exist - error!`);
    })
    .then(countries => {
      markup(countries);
    })
    .catch(err => {
      refs.headArea.innerHTML = '';
      inspection.name = '';
      return console.error(err);
    });
}

export default api;
