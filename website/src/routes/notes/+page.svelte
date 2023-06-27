<script lang="ts">
    import { onMount } from "svelte";
    export let data;
    
    let _notes: any[];
    const tags: string[] = [];

    const colors = [
        {
            bg: 'bg-teal-800',
            text: 'text-teal-200',
            floatingClass: `text-teal-700 absolute`,
            floatingStyle: `transform:rotate(-${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 30)+5}px`
        },
        {
            bg: 'bg-green-800',
            text: 'text-green-200',
            floatingClass: `text-green-700 absolute`,
            floatingStyle: `transform:rotate(${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 50)+5}px`
        },
        {
            bg: 'bg-violet-200',
            text: 'text-violet-800',
            floatingClass: `text-violet-300 absolute`,
            floatingStyle: `transform:rotate(-${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 50)+5}px`
        },
        {
            bg: 'bg-red-800',
            text: 'text-red-200',
            floatingClass: `text-red-300 absolute`,
            floatingStyle: `transform:rotate(${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 50)+5}px`
        },
        {
            bg: 'bg-orange-200',
            text: 'text-orange-700',
            floatingClass: `text-orange-600 absolute`,
            floatingStyle: `transform:rotate(-${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 50)+5}px`
        },
        {
            bg: 'bg-fuchsia-200',
            text: 'text-fuchsia-900',
            floatingClass: `text-fuchsia-800 absolute`,
            floatingStyle: `transform:rotate(-${Math.floor(Math.random() * 50)+10}deg); font-size:${Math.floor(Math.random() * 60)+120}px; left:${Math.floor(Math.random() * 250)+100}px; top: -${Math.floor(Math.random() * 50)+5}px`
        },
    ];
    const searchbarPlaceholders = ['React 4 Noobz...', '"Sequel" or "S-Q-L"?', 'How do I "Hello World?"'];

    let searchValue = '';
    let notes: any[] = [];
    
    onMount(async () => {
        _notes = data.props.notes;
        _notes.forEach((note) => {
            note.tags.forEach((tag: string) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });
        filteredNotes();
        shuffle(colors);
    });

    function shuffle(array: any[]) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function filteredNotes(sVal: string = '') {
        if (sVal === '') {
            notes = _notes;
            return;
        };

        const titleIncludesValue = (note: any, value: string) => note.title.includes(value);
        const descriptionIncludesValue = (note: any, value: string) => JSON.stringify(note.htmlDescription)?.includes(value);
        const noteTagsIncludeValue = (note:any, value: string) => note.tags.includes(value);
        const noteTagsIncludeValues = (note:any, values: any[]) => containsSubArray(values, note.tags);
        const matchesFilterCriterium = (note: any, sVal: string, tags: string[]) => noteTagsIncludeValues(note, tags) && (noteTagsIncludeValue(note, sVal) || titleIncludesValue(note, sVal) || descriptionIncludesValue(note, sVal));
        notes = _notes.filter((note) => matchesFilterCriterium(note, sVal, tags));
    }

    function containsSubArray(main: any[], sub: any[]) {
        return sub.every((i => v => i = main.indexOf(v, i) + 1)(0));
    }

    $: filteredNotes(searchValue);
</script>

<section class="mx-auto px-8 shadow-lg pt-32 pb-20 min-h-screen max-w-3xl">
    {#if _notes?.length > 0 && tags?.length > 0}
        <h1>My Notes</h1>
        <hr class='mb-8 bg-slate-300 h-[2px]'>

        <div class='flex flex-col mb-10'>
            <input type='text' bind:value={searchValue} placeholder={searchbarPlaceholders[Math.floor(Math.random() * searchbarPlaceholders.length)]} class='bg-slate-200 w-full border border-slate-300 mb-3'>
            <div>
                {#each tags as tag}
                    <button class={`${searchValue.toLowerCase().includes(tag.toLowerCase()) ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-700' } px-4 border border-slate-300 py-2 mr-2 mb-2`} on:click={() => searchValue.toLowerCase().includes(tag.toLowerCase()) ? searchValue = searchValue.replace(tag, '') : searchValue = tag}>{tag}</button>
                {/each}
            </div>
        </div>
        

        {#each tags as tag}
        {#if notes.filter((note) => note.tags.includes(tag))?.length > 0}
        {@const i=Math.floor(Math.random() * colors.length)}
            <div class='mb-8'>
                <div class={`${colors[i].bg} ${colors[i].text} relative overflow-hidden p-4 mb-2 flex items-center`}>
                    <h2 class='text-2xl'>{tag}</h2>
                    <span class={colors[i].floatingClass} style={colors[i].floatingStyle}>{tag}</span>
                </div>
                {#each notes.filter((note) => note.tags.includes(tag)) as note}
                <a class='block' href={'notes/' + note.slug}>{note.title}</a>
                {/each}
            </div>
        {/if}
        {/each}
        {#if notes.length === 0}
            <p>No results found :(</p>
        {/if}
    {:else}
    <p class='loading'>Loading</p>
    {/if}
</section>

<style lang='scss'>
    .loading {
        font-size: 28px;
    }

    .loading:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
        animation: ellipsis steps(4,end) 900ms infinite;
        content: "\2026"; /* ascii code for the ellipsis character */
        width: 0px;
    }

    @keyframes ellipsis {
        to {
            width: 1em;    
        }
    }

    h1 {
        @apply text-4xl font-bold pt-0 text-slate-800;
    }
    h2 {
        @apply text-3xl font-bold;

        &:first-of-type {
            @apply pt-0;
        }
    }
    a {
        @apply break-words text-lg text-slate-500 hover:text-slate-700 underline underline-offset-[3px];
    }
</style>

