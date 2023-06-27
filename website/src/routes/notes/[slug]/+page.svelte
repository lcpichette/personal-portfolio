<script lang="ts">
    import { onMount } from "svelte";
    export let data;
    
    let note;
    
    onMount(async () => {
      note = data.props.notes[0];
    });
</script>

<section class="note mx-auto px-8 shadow-lg pt-32 pb-20 min-h-screen max-w-3xl">
    {#if note}
    <div class='flex justify-between items-center mb-6'>
        <a href='/notes' class='shadow-none hover:shadow-lg hover:-translate-x-[2px] hover:-translate-y-[3px] transition-all duration-500 px-4 py-1 border-2 border-slate-800'>
            <i class="fa-solid fa-turn-down-left fa-flip-vertical text-lg text-slate-700"></i>
        </a>
        
        <div class='tags flex gap-x-4 flex-wrap'>
            {#each note?.tags as tag}
                <span class='py-[7px] px-4 border-2 border-slate-400 text-slate-500 font-bold rounded-xl'>{tag}</span>
            {/each}
        </div>
    </div>
    
    <h1>{note?.title}</h1>
    <div class='flex justify-between pt-1'>
        <span>Lucas Pichette</span>
        <span>{new Date(note?.lastModified).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}</span>
    </div>
    <hr class='mb-12 bg-slate-300 h-[2px]'>
    {@html note?.htmlDescription?.html}
    {:else}
    <p>loading...</p>
    {/if}
</section>

<style lang="scss">
    :global(section.note *) {
        @apply text-lg;
    }
    :global(section.note .tags > span) {
        @apply text-sm;
    }
    :global(section.note h1) {
        @apply text-4xl font-bold pt-0 pb-1 text-slate-800;
    }
    :global(section.note h2) {
        @apply text-3xl font-bold pt-12 pb-1 text-slate-800;

        &:first-of-type {
            @apply pt-0;
        }
    }
    :global(section.note h3) {
        @apply text-2xl font-bold pt-3 pb-1 text-slate-800;
    }
    :global(section.note h4) {
        @apply text-xl font-bold pt-3 pb-1 text-slate-800;
    }
    :global(section.note a) {
        @apply break-words text-slate-500 hover:text-slate-700 underline underline-offset-[3px];
    }
    :global(section.note pre) {
        @apply bg-slate-800 text-slate-100 my-4 p-4 rounded-lg;
    }
    :global(section.note p code) {
        @apply text-base bg-slate-300 rounded-md p-1;
    }
    :global(section.note blockquote) {
        @apply pl-3 border-l-4 border-slate-300 italic my-4 text-slate-700/90;
    }
    :global(section.note ol) {
        @apply list-decimal pl-10;
    }
    :global(section.note ul) {
        @apply list-disc pl-10;
    }
</style>
