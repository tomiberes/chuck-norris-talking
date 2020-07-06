<script context="module">
  const isApiLess = Boolean(process.env.APILESS);

  export async function preload({params}) {
    if (isApiLess) {
      const res = await this.fetch(`chuck/category/${params.category}.json`);
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
  import {onMount} from 'svelte';

  import ChuckJokes from '../../../components/ChuckJokes.svelte';

  onMount(() => {
    if (!isApiLess) {
      return;
    }
  });

  export let jokes;
</script>

<ChuckJokes {jokes} />
