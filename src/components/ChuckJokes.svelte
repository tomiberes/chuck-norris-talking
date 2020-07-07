<script context="module">

</script>

<script>
  export let jokes = [];
  export let jokesValues = [];

  $: jokesValues = jokes.map((j) => j.value);
</script>

<ul>
  {#each jokesValues as val}
    <li>
      <p class="m-6 text-gray-800">{val}</p>
    </li>
  {/each}
</ul>
