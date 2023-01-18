<template>
    <nav 
        class="
            text-lg
            md:text-xl 
            py-.6em 
            px-.6em 
            flex 
            flex-wrap 
            flex-row 
            basis-auto 
            justify-between 
            items-center
        "
    >
       
        <router-link class="logo w-5em" to="/">
            S_U
        </router-link>

        <div class="btns flex">
            <button @click="toggleDark()" class="i-carbon-sun dark:i-carbon-moon icon-btn text-2xl"></button>
            <button @click="toggleMenu()" class="i-carbon-list ml-1em md:display-none icon-btn text-2xl"></button>
        </div>

        <div 
            class="
                display-none
                text-1.2rem
                links  
                md:flex 
                justify-between 
                flex-wrap 
                basis-auto 
                gap-.5em 
                items-center
            ">
            
            <router-link to="/">
                Projects
            </router-link>
            
            <router-link to="/about">
                About Me
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
    min-width: 6em;
    width: 7em;
    max-width: 8em;
    margin: 0em .5em;
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