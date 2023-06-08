<template>
    <section class="mt-14 px-4 sm:mt-[60px] md:mt-[100px] md:px-0">
        <div class="grid md:mx-auto w-full md:w-[90%] 2xl:w-[55%]">
            <line-break></line-break>
            <ul class="grid grid-cols-2 mt-[40px] sm:mt-[50px] md:mt-[70px] sm:grid-cols-3 gap-8">
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
                    name: 'JS',
                    experience: '2 Years of Experience'
                },
                {
                    name: 'And more...',
                    experience: 'Just ask me!'
                },
            ]
        }
    }
}
</script>