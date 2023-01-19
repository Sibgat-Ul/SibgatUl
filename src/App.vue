<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Nav class="md:mb-1em z-99" />
    
    <RouterView></RouterView>
    
    <Footer v-once class="display-none md:display-block md:animate-back-in-up"></Footer>
</template>

<style>
html.dark {
    color-scheme: dark;
}
</style>

<style scoped>
main {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100vh;
    width: 100%;
    transform: translate(-50%, -50%);
}
</style>
