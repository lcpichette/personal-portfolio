<script lang="ts">
    import { Canvas} from '@threlte/core';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    import Scene from '$lib/components/scene.svelte';

    let y;
    let resumeEle;

    // We add an extra 0.01 because scrolling to the bottom just leaves the smallesstttt sliver left
    $: progressValue = (y / (resumeEle?.scrollHeight)) + 0.01;

</script>

<svelte:window bind:scrollY={y}
               on:scroll={() => progress.set(progressValue)} />

<div id="canvas-wrapper">
    <Canvas id="viewport">
        <Scene />
    </Canvas>
</div>

<div id="resume" bind:this={resumeEle} style:top="calc(100vh - {{y}})">
    <progress value={$progress}></progress>
    <h1>Resume</h1>
    <p>Lorem ipsum</p>

</div>


<style lang="scss">
  #canvas-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  #resume {
    position: absolute;
    top: 100vh;
    left: 10%;

    width: clamp(300px, 40%, 800px);

    background-color: #F2E8CF;
    padding: 24px;
  }

  progress {
    display: block;
    width: 100%;
  }
</style>
