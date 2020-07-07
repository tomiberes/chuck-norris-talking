<script context="module">
  import isString from 'lodash/isString';

  // Normalize, ".env" supplies "string" & plain env var supplies "boolean".
  const apiLess = process.env.APILESS;
  export const isApiLess = isString(apiLess) ? apiLess === 'true' : apiLess;

  export async function preload({params}) {
    if (isApiLess) {
      const res = await this.fetch(`category/${params.category}.json`);
      const data = await res.json();

      if (res.status === 200) {
        return {jokes: data};
      } else {
        this.error(res.status, data.message);
      }
    }
  }
</script>

<script>
  import {stores} from '@sapper/app';

  import ChuckJokes from '../../components/ChuckJokes.svelte';
  import {makeJokes} from '../_jokes';

  const {page} = stores();
  export let jokes;

  async function handleCategory(category) {
    jokes = await makeJokes(category);
  }

  $: if (!isApiLess) {
    handleCategory($page.params.category);
  }
</script>

<ChuckJokes {jokes} />
