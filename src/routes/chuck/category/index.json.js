import {makeCategories} from '../_jokes';

let categories = [];

export async function get(req, res) {
  // Simple cachce, for per build randomized categories.
  categories = categories.length > 0 ? categories : await makeCategories();
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(categories));
}
