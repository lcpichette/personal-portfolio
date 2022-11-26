<!--
- NOTES TO SELF:
- By default Threlte is responsive and will set up cameras properly on resize (aspect ratio etc)
-->
<script>
    import { OrbitControls, Three } from '@threlte/core';

    import {
        AmbientLight,
        DirectionalLight,
        Mesh,
        MeshStandardMaterial,
        PerspectiveCamera, PlaneGeometry
    } from 'three';

    import { degToRad } from 'three/src/math/MathUtils';

    import Cube from '$lib/components/cube.svelte';
</script>

<Three type={PerspectiveCamera} makeDefault position={[10, 10, 10]} fov={24}>
    <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} enablePan={false}
                   target={{ y: 0 }} />
</Three>

<Three type={DirectionalLight} castShadow position={[3, 5, 8]} />
<Three type={DirectionalLight} position={[-3, 10, -10]} intensity={0.01} />
<Three type={AmbientLight} intensity={0.06} />

<Cube />

<!-- Floor -->
<Three type={Mesh} receiveShadow rotation.x={degToRad(-90)}>
    <Three type={PlaneGeometry} args={[100, 100]} />
    <Three type={MeshStandardMaterial} color="#386641" />
</Three>
