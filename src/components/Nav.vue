<template>
    <nav class="text-lg py-.6em pl-1.5em flex flex-wrap flex-row basis-auto justify-between items-center">
        <div class="logo">
            <router-link to="/">
                Sibgat Ul Islam
            </router-link>
        </div>

        <div class="links mr-1em flex justify-between flex-wrap basis-auto gap-.5em items-center">
            <router-link to="#projects">
            Projects
            </router-link>
            
            <router-link to="/about">
                About
            </router-link>

            
            <router-link to="socials">
                Socials
            </router-link>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}

.links > a {
    width: 5em;
    text-align: center;
    padding: .2em 0;
}

nav {
  background-color: var(--title-bg);
  color: var(--title-font);
}

.links > a:hover {
    background-color: var(--title-font);
    color: var(--title-bg)
}
</style>