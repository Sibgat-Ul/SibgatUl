<template>
    <nav class="text-lg py-.6em pl-1.5em flex flex-wrap flex-row basis-auto justify-between items-center">
        <div class="logo">
            <a href="#home">
                Sibgat Ul Islam
            </a>
        </div>

        <div class="links mr-1em flex justify-between flex-wrap basis-auto gap-.5em items-center">
            <a href="#projects">
            Projects
            </a>
            
            <a href="#about">
                About
            </a>

            
            <a href="socials">
                Socials
            </a>
        </div>
    </nav>
</template>

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