<script setup lang="ts">
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { TextureLoader } from 'three'
import { useProgress } from '@tresjs/cientos'
import { useTexture } from '@tresjs/core'

const { hasFinishLoading, progress, items } = await useProgress()


const texture = useLoader(TextureLoader, '/assets/images/1.jpg')

watch(hasFinishLoading, () => {
  console.log('ok', items.value)
})
</script>
<template>
  <TresCanvas preset="realistic" shadows alpha>
    <!--     <MouseParallax 
    :factor=".03" 
    :enableZoom="false" 
    :autoRotate="true" 
    :autoRotateSpeed="1" /> -->
    <TresPerspectiveCamera :position="[0, 0, .22]" />
    <TresGroup :rotation="[-.3, 2.5, 0.1]">
      <Levioso :range="[-0.004, 0.004]">
        <Suspense>
          <GLTFModel path="/assets/3d/scene.glb" draco ref="modelRef" >
            <TresMeshStandardMaterial :map="texture" />
          </GLTFModel>
        </Suspense>
      </Levioso>
    </TresGroup>
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
  </TresCanvas>
</template>