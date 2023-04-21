<script lang="ts">
  import { onMount } from "svelte";
  export let data;
  
  let headshots, signature;
  
  onMount(async () => {
    headshots = data.props.headshots[0];
    signature = data.props.signatures[0].image;
  });
</script>

<svelte:head>
  <title>Lucas Pichette</title>
</svelte:head>

<div class="h-screen min-h-[620px] flex items-center grid grid-cols-12">
  <div class="about col-span-12 lg:col-span-8 h-full">
    <div class="grid grid-rows-6 h-full pt-20">
      <section class="row-span-4 h-full site-margins">
        <div class="h-full flex flex-col justify-center">
          <span class="font-bold text-6xl">Hey, I'm</span>
          <h2 class="font-bold text-6xl">Lucas Pichette</h2>
          <div class="px-4 h-8 bg-red-700 text-slate-100 rounded-full font-medium w-fit flex justify-center items-center">
            <span class="translate-y-[1px]">Full-Stack</span>
          </div>
          <p class="mt-8 text-lg">
            I design, develop, and deploy software
          </p>
          <div class="mt-4 flex gap-8">
            <a href="https://goldfoxdev.com/#contact" target="_blank" rel="noopener nofollower noreferrer" class="font-semibold px-4 h-12 border-4 border-red-700 text-red-700 flex justify-center items-center w-fit shadow-md hover:shadow-lg hover:-translate-x-[2px] hover:-translate-y-[1px] transition-all duration-500">
              <span class="translate-y-[1px]">Hire My Services</span>
            </a>
            <a href="/about" class="flex gap-3 px-2 items-center hover-target">
              <span class="font-medium hover-underline">About</span>
              <i class="fa-sharp fa-solid fa-arrow-up-right -translate-y-[1px]"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="w-full bg-slate-800 h-full row-span-2 text-slate-100">
        <div class="site-margins py-6 md:py-0 h-full flex flex-col justify-center">
          <div class="flex flex-col md:flex-row gap-6 justify-between">
            {#if signature}
            <div class="flex flex-col mx-auto md:mx-0 w-3/5 sm:w-2/5">
              <img src={signature.url} alt="signature" />
            </div>
            {/if}
            <div class="flex flex-col w-full md:w-3/5">
              <span class="font-semibold tracking-wider border-b border-slate-500">I specialize in...</span>
              <div class="flex gap-8">
                <div class="flex flex-col mt-2">
                  <span>Website Design</span>
                  <span>Website Development</span>
                  <span>SEO</span>
                </div>
                <div class="flex flex-col mt-2">
                  <span>Databases</span>
                  <span>AWS</span>
                  <span>Lambda</span>
                </div>
              </div>
            </div>
          </div>
          <span class="mt-4 text-center text-xs text-slate-300">© 2023 Lucas Pichette, All rights reserved.</span>
        </div>
      </section>
    </div>
  </div>
  {#if headshots}
   
    <div style={`background-image:url("${headshots['imageLarge'].url}")`} class="hidden lg:block col-span-4 bg-slate-300 w-full h-full bg-no-repeat bg-center bg-contain"></div>
  {/if}
</div>
