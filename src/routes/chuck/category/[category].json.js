import {makeJokes} from '../_jokes';

export async function get(req, res) {
  const {category} = req.params;

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(await makeJokes(category)));
}
