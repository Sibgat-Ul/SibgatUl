<script setup></script>

<template>
    <main 
    class="
        p-1em
        md:main
        flex 
        flex-col 
        justify-center 
        text-center 
        md:text-start 
        md:p-2em 
        m-auto
    "
    >
        <h1 
        class="
            text-3xl 
            fw-900 
            sm:text-5xl 
            my-.4em
            animate-fade-in-left animate-duration-.55s
            md:my-1em
        ">
            Hello, I am Sibgat Ul Islam
        </h1>

        <h2 class="text-xl md:text-3xl animate-fade-in-right animate-duration-.55s">
            Welcome to my portfolio! I am a web and app developer with
            experience in creating dynamic, responsive websites and mobile
            applications. My expertise lies in utilizing cutting-edge
            technologies
            and libraries to create visually appealing and user-friendly
            interfaces. Whether you're looking for a simple website or a complex
            web application, I am dedicated to delivering high-quality solutions
            that exceed expectations. Let's work together to bring your ideas to
            life.
        </h2>
    </main>
</template>

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