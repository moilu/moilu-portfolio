<template>
    <section class="mt-[80px] pt-4 sm:mt-[100px] lg:mt-[140px] px-4 md:px-0" id="contact">
        <div class="grid gap-14 mt-10 w-full sm:grid-cols-2 md:mx-auto md:w-[90%] 2xl:w-[55%]">
            <div>
                <h1 class="fold-bold mb-4 text-4xl">Contact</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form @submit="submitForm" class="grid gap-4">
                <input v-model="formName" class="bg-transparent outline-nonen" placeholder="Name" type="text" name="name" id="">
                <line-break />
                <input v-model="formEmail" class="bg-transparent outline-none" placeholder="Email" type="email" name="email" id="">
                <line-break />
                <textarea v-model="formMessage" class="bg-transparent resize-none outline-none" placeholder="Message" name="message" id="" cols="30" rows="5"></textarea>
                <line-break />
                <button class="hover:animate-pulse decoration-2 decoration-custom-blue justify-self-end text-base underline underline-offset-8">SEND MESSAGE</button>
            </form>
        </div>
        <div class="grid justify-center mt-10 w-full md:mx-auto md:w-[90%] 2xl:w-[55%]">
            <p class="decoration-2 decoration-custom-blue underline underline-offset-2">
                Made by Moilu
            </p>
            <a class="justify-self-center hover:animate-pulse text-sm" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Don't click this!</a>
        </div>
    </section>
</template>
<script>
import LineBreak from './fragments/LineBreak.vue';
import emailjs from 'emailjs-com';

export default {
    name: 'ContactForm',
    components: {
        LineBreak
    },
    data() {
        return {
            formName: '',
            formEmail: '',
            formMessage: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            if (!this.formName || !this.formEmail || !this.formMessage) {
                return;
            }
            try {
                console.log(e.target);
                emailjs.sendForm('service_8ati7t5', 'template_5quu2ml', e.target, 'd973Zl14QhmDTN6ed', {
                    name: this.formName,
                    email: this.formEmail,
                    message: this.formMessage
                });
            } catch (error) {
                console.log(error);
            }
            // Reset form fields
            this.formName = '';
            this.formEmail = '';
            this.formMessage = '';
        }
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