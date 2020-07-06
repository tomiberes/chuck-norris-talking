import ky from 'ky-universal';
import sampleSize from 'lodash/sampleSize';

const API_URL = 'https://api.chucknorris.io/jokes';
const NO_CATEGORIES = 3;
const NO_JOKES = 3;

export async function getCategories() {
  return ky(`${API_URL}/categories`).json();
}

export async function getJoke(category = '') {
  return ky(`${API_URL}/random`, {searchParams: {category}}).json();
}

export async function makeCategories() {
  return sampleSize(await getCategories(), NO_CATEGORIES);
}

export async function makeJokes(category) {
  return Promise.all(Array.from({length: NO_JOKES}, () => getJoke(category)));
}
