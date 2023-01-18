<script setup>
import { RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
</script>

<template>
    <div class="main h-screen p-.5em pb-0 md:p-2em">
        <header>
            <Nav class="b-rd mb-.5em md:mb-1em" />
        </header>

        <RouterView></RouterView>

        <footer class="socials w-full h-auto m-auto text-center md:bottom-15 md:absolute">
            <h2 class="mb-.5em">Connect with me</h2>

            <div
                class="text-3xl w-9em md:w-15em m-a md:text-4xl flex flex-wrap justify-between items-center"
            >
                <a
                    href="https://www.freecodecamp.org/Sibgat"
                    target="_blank"
                    class="i-carbon-logo-github text-inherit dark:text-#f0f6fc"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/sibgat-ul-islam-43229b210/"
                    target="_blank"
                    class="i-carbon-logo-linkedin dark:text-#0a66c2"
                    rel="noopener noreferrer"
                >
                    Linked In
                </a>
                <a
                    href="https://twitter.com/sibgatulislam"
                    target="_blank"
                    class="i-carbon-logo-twitter text-#1d9bf0"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100006011417933"
                    target="_blank"
                    class="i-carbon-logo-facebook text-#2e89ff"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>
            </div>
        </footer>
    </div>
</template>

<style>
html.dark {
    color-scheme: dark;
}
</style>
