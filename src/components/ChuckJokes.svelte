<script context="module">

</script>

<script>
  export let jokes = [];
  export let jokesValues = [];

  $: jokesValues = jokes.map((j) => j.value);
</script>

<ul>
  {#each jokesValues as val}
    <li>{val}</li>
  {/each}
</ul>
