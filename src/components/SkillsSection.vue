<template>
    <section class="mt-14 pt-8 px-4 md:px-0">
        <div class="container grid md:mx-auto w-full md:w-[90%] 2xl:w-1/2">
            <line-break></line-break>
            <ul class="grid grid-cols-2 mt-14 pt-3 sm:grid-cols-3 gap-8">
                <li v-for="(skill, index) in skills" :key="index">
                    <h3 class="font-bold mb-1 text-4xl">{{ skill.name }}</h3>
                    <p class="text-base">{{ skill.experience }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import LineBreak from './fragments/LineBreak.vue'
export default {
    name: 'SkillsSection',
    components: {
        LineBreak
    },
    data() {
        return {
            skills: [
                {
                    name: 'Vue',
                    experience: '2 Years of Experience'
                },
                {
                    name: 'HTML',
                    experience: '2 Years of Experience'
                },
                {
                    name: 'CSS',
                    experience: '2 Years of Experience'
                },
                {
                    name: 'Sass',
                    experience: '2 Years of Experience'
                },
                {
                    name: 'JavaScript',
                    experience: '2 Years of Experience'
                },
            ]
        }
    }
}
</script>