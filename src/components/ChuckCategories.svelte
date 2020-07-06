<script>
  export let categories = [];
</script>

<ul>
  {#each categories as category}
    <li>
      <a rel="prefetch" href="chuck/category/{category.slug}">
        {category.name}
      </a>
    </li>
  {/each}
</ul>
