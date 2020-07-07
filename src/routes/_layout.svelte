<script context="module">
  import kebabCase from 'lodash/snakeCase';
  import startCase from 'lodash/startCase';

  export async function preload() {
    const res = await this.fetch('category.json');
    const json = await res.json();

    return {
      categories: Array.from(json).map((category) => {
        return {name: startCase(category), slug: kebabCase(category)};
      }),
    };
  }
</script>

<script>
  import ChuckCategories from '../components/ChuckCategories.svelte';

  export let categories = [];
</script>

<nav class="border-b">
  <ChuckCategories {categories} />
</nav>
<main class="container mx-auto">
  <slot />
</main>
