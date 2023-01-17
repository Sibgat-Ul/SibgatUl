<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue';

</script>

<template>
  <div class="main h-screen p-.5em md:p-2em">
    <header>
      <Nav class="b-rd mb-.5em md:mb-2em"/>
    </header>

    <section 
      class="
        hero 
        h-[calc(100%-6em)] 
        grid
        gap-1em
        content-center
        items-center
        md:gap-2em
        grid-cols-1
        md:grid-cols-2
        b-rd
      "
    >
      <div class="p-1em">
        <h2>
          Lorem Ipsum
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempore impedit obcaecati, aspernatur inventore quod voluptatibus itaque quo blanditiis, dignissimos nihil natus non ipsa laborum soluta esse, officia eaque debitis!
        </p>
      </div>
      <div class="p-1em ">b</div>
    </section>
  </div>
</template>

<style scoped>
/* grid-cols-[repeat(auto-fit,minmax(20em,1fr))] */

.hero  {
  background-color: var(--title-bg);
  color: var(--title-font);
}
</style>
