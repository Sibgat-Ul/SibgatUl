<template>
    <nav class="text-xl py-.6em pl-1.5em flex flex-wrap flex-row basis-auto justify-between items-center">
       
        <router-link class="logo w-5em" to="/">
            S_U
        </router-link>
       
        <button @click="toggleDark()" class="i-carbon-sun dark:i-carbon-moon icon-btn text-2xl"></button>
        
        <div class="links mr-1em flex justify-between flex-wrap basis-auto gap-.5em items-center">
            <router-link to="/">
                Projects
            </router-link>
            
            <router-link to="/about#det">
                About Me
            </router-link>

            
            <router-link to="/contract">
                Contract Me
            </router-link>
        </div>
    </nav>
</template>

<script setup>
import {useToggle, useDark} from '@vueuse/core'

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
nav {
    transition: all .125s;
}

a {
    color: inherit;
    text-decoration: none;
    transition: all .125s;
}

.links > a {
    min-width: 5em;
    width: 7em;
    max-width: 8em;
}


.links > a:hover, .logo:hover {
    color: var(--color-font-light);
    box-shadow: none;
}

nav a.router-link-exact-active {
  color: var(--color-font-light);
}

.logo, .links > a  {
    background-color: var(--color-background-dark) !important;
    padding: .2em 0;
    text-align: center;
    padding: .2em 0;
    border-radius: .25rem;
    background-color: var(--color-background-dark);
    box-shadow: .25rem .25rem var(--color-shadow);
    
}

.logo {
    box-shadow: -.25rem .25rem var(--color-shadow);
}

button {
    cursor: pointer
}
</style>