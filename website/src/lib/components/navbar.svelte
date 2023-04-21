<script lang="ts">
  import type { Project } from '$lib/models';
  export let projects: Project[] = [];
  
  let showProjects = false;
  let projectOffset = 0;
  let cardWidth = 500;
  
  function toggleRight() {
    if (projectOffset < projects.length - 1) {
      projectOffset++;
    } else {
      projectOffset = 0;
    }
  }
  
  function toggleLeft() {
    if (projectOffset > 0) {
      projectOffset--;
    } else {
      projectOffset = projects.length - 1;
    }
  }
</script>

<div class="h-16 lg:h-20 bg-slate-100 py-4 border-b border-slate-300 site-margins w-full fixed top-0 left-0 select-none flex justify-between items-center">
  <span class="tracking-wide text-4xl font-bold relative">
    Lucas
    <i class="fa-solid fa-mug-hot text-sm text-red-700"></i>
  </span>
  
  <div class="hidden md:flex gap-6 text-lg">
    <a href="/" class="px-4 py-1 hover-target">
      <span class=" hover-underline">Home</span>
    </a>
    <button class="px-4 py-1 hover-target" on:click={() => {showProjects = !showProjects;}}>
      <span class="hover-underline">Projects</span>
      <i class:rotate-180={showProjects} class="fa-solid fa-caret-down text-xs text-red-700 transition-all duration-1000"></i>
    </button>
    <a href="/about" class="px-4 py-1 hover-target">
      <span class="hover-underline">About</span>
    </a>
  </div>
  <a href="/contact" class="hidden md:flex border-2 border-slate-800 px-6 h-10 lg:h-12 font-medium cursor-pointer justify-center items-center shadow-none hover:shadow-lg hover:-translate-x-[2px] hover:-translate-y-[3px] transition-all duration-500">
    <span class="translate-y-[2px]">Contact me</span>
  </a>
  <button class="md:hidden">
    <i class="fa-sharp fa-bars text-3xl"></i>
  </button>
</div>
<div class:h-0={!showProjects} class:h-32={showProjects} class="hidden md:block top-16 lg:top-20 overflow-hidden bg-slate-100 border-b border-slate-300 site-margins w-full fixed left-0 transition-all duration-1000">
  <div style={`width:${cardWidth * (projects.length)}px;`} class="px-6 py-4 h-full relative z-20 overflow-hidden">
    <div style={`left:-${projectOffset * cardWidth}px`} class="flex gap-8 relative items-center transition-all">
      {#each projects as project}
        <a href="{project.link || ''}" target="_blank" rel="noopener nofollower noreferrer" class="card flex gap-4 w-[500px] border border-slate-200 bg-slate-50 shadow-lg hover:shadow-xl hover:-translate-x-1 hover:-translate-y-0.5 transition-all duration-500">
          <div style={`background-image:url("${project.previewImage.url}")`} class="preview h-24 w-40 bg-no-repeat bg-center bg-cover"></div>
          <div class="description py-2 pr-2 flex flex-col gap-0.5">
            <span class="font-semibold">{project.title}</span>
            <span>{project.description}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
  <div class="site-margins absolute top-0 left-0 h-full z-20 bg-slate-100 shadow-lg" style="padding-right:0"></div>
  <div class="site-margins absolute top-0 right-0 h-full z-20 bg-slate-100 shadow-lg" style="padding-left:0"></div>
  {#if projectOffset !== 0}
  <div class="h-36 absolute z-20 top-0 left-[-1.25rem] site-margins flex items-center" style="padding-right:0">
    <button on:click={toggleLeft} class="h-10 w-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center shadow-lg hover:shadow-xl hover:-translate-x-[2px] hover:-translate-y-[1px] transition-all duration-500">
      <i class="fa-duotone fa-angles-left"></i>
    </button>
  </div>
  {/if}
  <div class="h-36 absolute z-20 top-0 right-[-1.25rem] site-margins flex items-center" style="padding-left:0">
    <button on:click={toggleRight} class="h-10 w-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center shadow-lg hover:shadow-xl hover:-translate-x-[2px] hover:-translate-y-[1px] transition-all duration-500">
      <i class="fa-duotone fa-angles-right"></i>
    </button>
  </div>
</div>

<style lang="scss">
  :root {
    --fa-primary-color: theme('colors.slate.700');
    --fa-secondary-color: theme('colors.slate.400');
    --fa-secondary-opacity: 1;
  }
</style>

