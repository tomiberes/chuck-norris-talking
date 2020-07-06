const ky = require('ky-universal');

const apiUrl = 'https://api.chucknorris.io/jokes';

async function getCategories() {
  return ky(`${apiUrl}/categories`).json();
}

async function getJoke(category = '') {
  return ky(`${apiUrl}/random`, {searchParams: {category}}).json();
}

module.exports = {
  getCategories,
  getJoke,
};
