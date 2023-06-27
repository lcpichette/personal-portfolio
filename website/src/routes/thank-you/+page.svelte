<script lang="ts">
    import { onMount } from "svelte";
    export let data;
    
    let headshot;
    
    onMount(async () => {
      headshot = data.props.headshots[0]?.imageFace;
    });
</script>

<div class="min-h-full pt-16 pb-12 flex flex-col">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex-shrink-0 flex justify-center">
            <a href="/" class="inline-flex">
                <span class="sr-only">Lucas Pichette</span>
                {#if headshot}
                    <img class="h-20 w-auto rounded-full" src={headshot?.url} alt="company logo">
                {/if}
            </a>
          </div>
        <div class="pt-8">
            <div class="text-center">
                <p class="text-sm font-semibold text-red-700 uppercase tracking-wide">Success!</p>
                  <h1 class="mt-2 text-4xl font-extrabold text-slate-700 tracking-tight sm:text-5xl">Your email was successfully sent.</h1>
                <p class="mt-2 text-base text-slate-700-700">Thank you for your inquiry and for taking the time to reach out</p>
                <div class="mt-6">
                   <a href="/" class="text-base font-medium text-red-700">Go back home<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </div>
    </main>
</div>