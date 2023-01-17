<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue';

</script>

<template>
  <div class="main h-screen p-.5em md:p-2em">
    <header>
      <Nav class="mb-.5em md:mb-2em"/>
    </header>

    <section 
      class="
        hero 
        h-[calc(100%-6em)] 
        grid 
        gap-1em
        md:gap-2em
        
        grid-cols-1
        md:grid-cols-2
      "
    >
      <div class="">a</div>
      <div class="">b</div>
    </section>
  </div>
</template>

<style scoped>
/* grid-cols-[repeat(auto-fit,minmax(20em,1fr))] */

.hero > div {
  background-color: var(--title-bg);
  color: var(--title-font);
}
</style>
