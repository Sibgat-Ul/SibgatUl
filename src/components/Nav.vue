<template>
    <header class="">
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

            <div
                
                class="
                    text-1.2rem
                    links  
                    md:flex
                    md:flex-row
                    flex-wrap 
                    basis-auto 
                    gap-.5em 
                    items-center
                ">

                <div class="btns flex">
                    <button @click="toggleDark()" class="i-carbon-sun dark:i-carbon-moon icon-btn text-2xl"></button>
                    <button @click="toggleFunc()" class="i-carbon-list ml-1em md:display-none icon-btn text-2xl"></button>
                </div>
                
                <div 
                    class="
                    display-none
                    flex-col
                    text-1.2rem
                    links  
                    md:flex
                    md:flex-row
                    flex-wrap 
                    basis-auto 
                    gap-.5em 
                    items-center"
                >
                    <router-link to="/">
                        Projects
                    </router-link>
                    
                    <router-link to="/about">
                        About Me
                    </router-link>
                </div>
            </div>
        </nav>
        <div 
            :class="[toggleMenu ? 'flex mob-nav' : 'display-none']" 
            class="
                display-none
                h-0
                w-0
                flex-col
                text-1.2rem
                links
                justify-center
                gap-.5em 
                items-center
                z-99
            "
            >
            <router-link @click="toggleFunc()" to="/">
                Home
            </router-link>
            
            <router-link @click="toggleFunc()" to="/about">
                About Me
            </router-link>

            <Footer></Footer>
        </div>
    </header>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import {useToggle, useDark} from '@vueuse/core';
import {ref} from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

let toggleMenu = ref(false);
let toggleFunc = () => {
    toggleMenu.value = !toggleMenu.value;
    console.log(toggleMenu.value);
}
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

.mob-nav {
    height: calc(100vh - 2em);
    width: 100%;
    z-index: 98;
    background: var(--color-background);
}

.links > a {
    min-width: 8em;
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
    background: var(--color-background-dark) !important;
    padding: .2em 0;
    text-align: center;
    padding: .2em 0;
    border-radius: .25rem;
    background: var(--color-background-dark);
    box-shadow: .25rem .25rem var(--color-shadow);
    
}

.logo {
    box-shadow: -.25rem .25rem var(--color-shadow);
}

button {
    cursor: pointer
}
</style>