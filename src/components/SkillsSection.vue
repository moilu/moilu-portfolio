<template>
    <section class="grid mt-8 w-full">
        <line-break></line-break>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 pb-6">
            <li v-for="(skill, index) in skills" :key="index">
                <h3 class="font-bold mb-1 text-4xl">{{ skill.name }}</h3>
                <p class="text-base">{{ skill.experience }}</p>
            </li>
        </ul>
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
                    experience: '2 Years Experience'
                },
                {
                    name: 'HTML',
                    experience: '2 Years Experience'
                },
                {
                    name: 'CSS',
                    experience: '2 Years Experience'
                },
                {
                    name: 'Sass',
                    experience: '2 Years Experience'
                },
                {
                    name: 'JavaScript',
                    experience: '2 Years Experience'
                }
            ]
        }
    }
}
</script>