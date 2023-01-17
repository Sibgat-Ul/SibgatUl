<script setup>
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue';

</script>

<template>
  <div class="main h-screen p-.5em md:p-2em">
    <header>
      <Nav class="b-rd mb-.5em md:mb-1em"/>
    </header>

    <RouterView></RouterView>
  </div>
</template>

<style scoped>
</style>
