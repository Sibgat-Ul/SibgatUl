<script setup>

</script>

<template>
  <main 
      class="
        hero 
        h-[calc(100%-6em)] 
        grid
        gap-1em
        content-center
        items-center
        grid-cols-1
        md:grid-cols-2
        b-rd
      "
      >
      <section class="p-1em b-rd">
        <h2>
          Lorem Ipsum
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempore impedit obcaecati, aspernatur inventore quod voluptatibus itaque quo blanditiis, dignissimos nihil natus non ipsa laborum soluta esse, officia eaque debitis!
        </p>
      </section>

      <section class="p-1em bg-transparent">
        <img src="../assets/papapishu_cobra.svg" alt="" srcset="">
      </section>
  </main>
</template>

<style scoped>
/* grid-cols-[repeat(auto-fit,minmax(20em,1fr))] */

.hero {
  background-color: var(--title-bg);
  color: var(--title-font);
}

img {
  display: block;
  text-align: center;
  margin: auto;
  height: 30em;
}
</style>
