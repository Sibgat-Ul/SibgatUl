<template>
  <container
      class="
        hero 
        h-[calc(100%-6em)] 
        grid
        md:gap-1em
        content-center
        items-center
        grid-cols-1
        md:grid-cols-2
        b-rd
      "
      >
      <section class="dets px-1em md:p-1em">
        <h1 class="text-xl md:text-4xl">
          About Me
        </h1>
     
        <p class="text-sm md:text-lg md:my-1em">
          Hello! I am Sibgat Ul Islam, from Bangladesh, currently studying Bsc in Computer Science 
          and Electronics at North South University. I am a Linux enthausiast, love to build and 
          break, explore new ideas, whatever I do, I give 100% (only when I am programming ;)). 
        </p>
    
        <p class="text-sm md:text-lg md:my-1em">
          <p>I have learnt, </p>
          <ul>
            <li> Html, CSS, Javascript </li>
            <li> Java, Python, C, C++, Rust </li>
            <li> Aurdino </li>
            <li> Vue, Pinia, Express, Quasar, Ionic, Node.js </li>
            <li> Tauri(Rust) </li>
            <li> Solidity, Ethers.Js </li>
            <li> PostgreSQL </li>
          </ul>

          <p class="md:my-1em"> Current Stack, <li>Vue, Express, PostgreSQL, Node.Js, Tauri, Solidity</li></p>
        </p>
      </section>

      <section class="p-1em">
        <form action="" class="flex flex-col gap-1em b-rd">
          <input type="text" name="from" id="from" placeholder="from" class="h-3em b-rd">
          <textarea type="text" mame="textBox" id="textBox" class="h-10em b-rd" placeholder="Write to me..."></textarea>
        
          <input type="submit" class="w-15em h-2.6em b-rd m-a" value="Send">
        </form>
      </section>
    </container>
</template>

<style scoped>
form > input, textarea {
  border: none;
  background-color: var(--title-bg);
  outline: none;
  color: var(--title-font);
  padding: .9em;
}

input[type="submit"] {
  padding: 0px !important
}

h1 {

}
</style>
