<script>
  export let categories = [];
</script>

<ul class="flex justify-center">
  {#each categories as category}
    <li class="m-6">
      <a
        class="text-gray-600 hover:text-gray-900"
        rel="prefetch"
        href="category/{category.slug}">
        {category.name}
      </a>
    </li>
  {/each}
</ul>
