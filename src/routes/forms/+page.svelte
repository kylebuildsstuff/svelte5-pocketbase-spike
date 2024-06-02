<script lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import SuperDebug from 'sveltekit-superforms';

  let { data } = $props();

  const { form } = superForm(data.form);

  $effect(() => {
    console.log('data: ', data);
    console.log('data.form: ', data.form);
    console.log('form: ', form);
  });
</script>

<SuperDebug data={$form} />

<main
  class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10"
>
  <form method="POST">
    <label for="name">Name</label>
    <input type="text" name="name" bind:value={$form.name} />

    <label for="email">E-mail</label>
    <input type="email" name="email" bind:value={$form.email} />

    <div><button>Submit</button></div>
  </form>
</main>
