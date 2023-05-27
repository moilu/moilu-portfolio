<template>
    <section class="mt-12 pt-4 sm:mt-14 sm:pt-8 px-4 md:px-0" id="contact">
        <div class="grid sm:grid-cols-2 gap-14 mt-14 md:mx-auto pt-8 w-full md:w-4/5 2xl:w-1/3">
            <div>
                <h1 class="fold-bold mb-4 text-4xl">Contact</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form class="grid gap-4">
                <input class="bg-transparent outline-nonen" placeholder="Name" type="text" name="name" id="">
                <line-break />
                <input class="bg-transparent outline-none" placeholder="Email" type="email" name="email" id="">
                <line-break />
                <textarea class="bg-transparent resize-none outline-none" placeholder="Message" name="message" id="" cols="30" rows="5"></textarea>
                <line-break />
                <button class="hover:animate-pulse decoration-2 decoration-custom-blue justify-self-end text-base underline underline-offset-8">SEND MESSAGE</button>
            </form>
        </div>
    </section>
</template>
<script>
import LineBreak from './fragments/LineBreak.vue';

export default {
    name: 'ContactForm',
    components: {
        LineBreak
    }
}
</script>
<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #242424 inset;
    transition: background-color 5000s ease-in-out 0s;
}
</style>>