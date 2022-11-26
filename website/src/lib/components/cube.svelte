<script>
    import {InteractiveObject, Three} from '@threlte/core';
    import {spring} from 'svelte/motion';
    import {BoxGeometry, Group, Mesh, MeshStandardMaterial} from 'three';

    const scale = spring(1);
</script>

<Three type={Group} scale={$scale}>
    <Three type={Mesh} position.y={1} position.x={2.8} position.z={-1} castShadow let:ref>
        <!-- Add interaction -->
        <InteractiveObject
                object={ref}
                interactive
                on:pointerenter={() => ($scale = 1.1)}
                on:pointerleave={() => ($scale = 1)}
        />

        <Three type={BoxGeometry} />
        <Three type={MeshStandardMaterial} color="#F2E8CF" />
    </Three>
</Three>