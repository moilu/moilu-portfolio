<template>
    <section class="mt-14 pt-8">
        <div class="grid sm:grid-cols-2 gap-14 md:mx-auto w-full md:w-4/5 2xl:w-1/3">
            <div>
                <h1 class="fold-bold text-4xl">Contact</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form class="grid gap-4" action="#">
                <input type="text" name="name" id="">
                <input type="email" name="email" id="">
                <input type="text" name="message" id="">
                <button class="decoration-2 decoration-custom-blue justify-self-end text-base underline underline-offset-8">SEND MESSAGE</button>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ContactForm'
}
</script>