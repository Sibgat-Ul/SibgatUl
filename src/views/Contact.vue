<template>
    <section id="contact" class="p-1em m-auto my-5em md:my-10em">
        <form action="mailto:sibgatulislam@gmail.com" method="post" enctype="text/plain" class="flex flex-col gap-1em b-rd">            
            <textarea type="text" mame="textBox" id="textBox" class="h-10em b-rd" placeholder="Write to me..."></textarea>
        
            <input type="submit" class="w-15em h-2.6em b-rd m-a" value="Send">
        </form>
      </section>
</template>

<style scoped>

form > input, textarea {
  border: none;
  background-color: var(--color-background-dark);
  outline: none;
  color: var(--color-font-light);
  padding: .9em;
}

input[type="submit"] {
  padding: 0px !important
}
</style>