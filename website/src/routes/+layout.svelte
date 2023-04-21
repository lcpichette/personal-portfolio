<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "$lib/models";
  import Navbar from '$lib/components/navbar.svelte';
  import "../app.css";

  export let data;

  let projects: Project[];

  onMount(async () => {
    projects = data.props.projects;
  });
</script>

<main class="h-screen max-h-screen border-box">
  <slot />
  <Navbar {projects} />
</main>
