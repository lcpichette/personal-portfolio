<script lang="ts">
    import { Canvas} from '@threlte/core';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    import Scene from '$lib/components/scene.svelte';

    let y;
    let resumeEle;
    const textFadeinBreakpoint = 20;

    // We add an extra 0.01 because scrolling to the bottom just leaves the smallesstttt sliver left
    $: progressValue = (y / (resumeEle?.scrollHeight)) + 0.01;
    $: innerHeight = 0;
</script>

<svelte:window bind:scrollY={y}
               bind:innerHeight
               on:scroll={() => progress.set(progressValue)} />

<div id="canvas-wrapper">
    <Canvas id="viewport">
        <Scene />
    </Canvas>
</div>

<div id="name">
    <div class="size-wrapper">
        <span class="first">Lucas</span>
        <span class="last">Pichette</span>
        <div class="subscript-wrapper">
            <span class="subscript">AWS</span>
            <span class="subscript"><b>.</b>TS</span>
            <span class="subscript"><b>.</b>TF</span>
        </div>

    </div>
</div>

<div id="resume" bind:this={resumeEle} style:top="calc(100vh - {y})"
     style:border-top-left-radius="calc({innerHeight}px - {y}px)"
     style:border-top-right-radius="calc({innerHeight}px - {y}px)">
    {#if y >= (innerHeight - textFadeinBreakpoint) }
        <div transition:fade>
            <progress value={$progress}></progress>
            <h1>Resume</h1>
            <h2>Full Stack Engineer</h2>
            <section>
                <a href="https://www.triadhq.com/">Triad</a>, March 2022 to Present
                ({(new Date().getMonth() - new Date(2022, 3).getMonth() + 2)}mo)
                <br />
                <ul>
                    <li>Development of highly performant and to-design web-based projects.</li>
                    <li>Consistently produced performant, responsive, and aesthetically pleasing web components using: Angular, SCSS, TypeScript, ElasticSearch, and Strapi.</li>
                    <li>Delegated a contract development team via: ticket creation, acceptance testing, code reviews, and one-on-one’s to elaborate as needed.</li>
                    <li>Created two self-services – job promotions and organization memberships – leveraging Stripe (API and SDK) checkout sessions.</li>
                </ul>
            </section>
            <section>
                <a href="https://goldfoxdev.com/">Gold Fox Dev</a>, September 2021 to June 2022
                (10mo)
                <br />
                <ul>
                    <li>Development of digital assets such as websites, APIs, and other internal tools.</li>
                    <li>Designed and instantiated AWS environments according to the <a href="https://docs.aws.amazon.com/wellarchitected/latest/high-performance-computing-lens/the-pillars-of-the-well-architected-framework.html">5
                        Pillars of the
                        Well-Architected Framework</a>.</li>
                </ul>
            </section>
            <h2>Certifications</h2>
            <div class="flex-sb">
                <span>AWS Certified Solutions Architect</span>
                <a href="https://www.credly.com/badges/a83aa74f-5e59-4236-ae7e-e3000cfb7110/public_url">1KC1N77DKMEEQVKL</a>
            </div>
            <div class="flex-sb">
                <span>BrainStation UX Design</span>
                <a href="https://brainstation.io/documents/certificates/830-763-249">830-763-249</a>
            </div>
            <div class="flex-sb">
                <span>BrainStation UI Design</span>
                <a href="https://brainstation.io/documents/certificates/830-763-250">830-763-250</a>
            </div>
            <h2>Education</h2>
            <section>
                <a href="https://engineering.oregonstate.edu/">OSU</a>,  B.S. Computer Science
            </section>
        </div>
    {/if}
</div>

<style lang="scss">
  #canvas-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  #name {
    height: 100vh;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .size-wrapper {
      width: 360px;

      .first, .last {
        text-align: center;
        width: 100%;
        display: block;
      }
      .first {
        font-size: 6.5rem;
        font-weight: 800;
        text-transform: uppercase;
      }
      .last {
        font-size: 3.75rem;
        font-weight: 400;
        letter-spacing: 8px;
        text-transform: uppercase;
      }
      .subscript-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .subscript {
          margin-top: 1rem;
          font-size: 2rem;
          font-weight: 200;
          letter-spacing: 8px;
        }
      }
    }
    @media (screen and min-width: 480px) {
      width: 50%;

      .size-wrapper {
        align-items: flex-end;

        .first, .last {
          text-align: end;
        }
      }
    }
  }

  #resume {
    position: absolute;
    top: 100vh;

    width: clamp(300px, 50%, 800px);

    background-color: #F2E8CF;
    padding: 6rem 1.5rem;
    min-height: 100vh;
  }

  progress {
    display: block;
    position: sticky;
    top: 0;
    z-index: 5;
    width: 100%;

    background-color: red;

    margin-bottom: 2.5rem;
  }

  .flex-sb {
    display: flex;
    justify-content: space-between;
  }
</style>
