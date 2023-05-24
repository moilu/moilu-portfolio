<template>
    <section class="mt-14 pt-8 md:mx-auto w-full md:w-4/5 2xl:w-1/3">
        <div class="flex justify-between pt-6">
            <h1 class="font-bold text-4xl">Projects</h1>
            <a class="decoration-4 decoration-custom-blue font-bold text-base underline underline-offset-8" href="">CONTACT ME</a>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 pt-4 pb-6">
            <ProjectCard v-for="(number, index) in numbers" :key="index"/>
        </div>
    </section>
</template>
<script>
import ProjectCard from './fragments/ProjectCard.vue';

export default {
    name: 'Projects',
    components: {
        ProjectCard
    },
    data() {
        return {
            numbers: [1, 2, 3]
        }
    }
}
</script>