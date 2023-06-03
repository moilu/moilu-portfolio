<template>
    <section class="mt-[80px] px-4 w-full sm:mt-[100px] lg:mt-[140px] md:mx-auto md:px-0 md:w-[90%] 2xl:w-1/2">
        <div class="flex justify-between">
            <h1 class="font-bold text-4xl">Projects</h1>
            <a class="hover:animate-pulse decoration-4 decoration-custom-blue font-bold text-base underline underline-offset-8" href="#contact">CONTACT ME</a>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            <div v-for="(project, index) in projects" :key="index">
                <ProjectCard :project="project" />
            </div>
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
            projects: [
                {
                    name: 'Preview card component',
                    stack: 'React, Tailwind CSS, Vite',
                    img: {
                        src: 'preview-card.jpg',
                        alt: 'Perfume preview card, price 149.99'
                    },
                    codeUrl: 'https://github.com/moilu/preview-card',
                    projectUrl: 'https://647a74aa65687c1aff6b2688--nimble-genie-69892e.netlify.app/',
                },
                {
                    name: 'Star Wars App',
                    stack: 'HTML, CSS, Vue, API REST',
                    img: {
                        src: 'starwars-app.webp',
                        alt: 'Starwars App'
                    },
                    codeUrl: 'https://github.com/moilu/sw-api/tree/main',
                    projectUrl: 'https://sw-api.vercel.app/',
                },
                {
                    name: 'Pokemon Game',
                    stack: 'HTML, CSS, Vue, API REST',
                    img: {
                        src: 'pokemon-app.webp',
                        alt: 'Pokemon Game'
                    },
                    codeUrl: 'https://github.com/moilu/03-pokemon-game',
                    projectUrl: 'https://vue-pokemon-by-moi.netlify.app/',
                },
                {
                    name: 'Budget App',
                    stack: 'React, Bootstrap, uuid (id generator)',
                    img: {
                        src: 'budget-app.webp',
                        alt: 'Budget App'
                    },
                    codeUrl: 'https://github.com/moilu/rjs-budget-app',
                    projectUrl: 'https://rjs-budget-app.vercel.app/',
                },
                {
                    name: 'Movie App',
                    stack: 'HTML, CSS, JavaScript, API REST',
                    img: {
                        src: 'movie-app.webp',
                        alt: 'Movie App'
                    },
                    codeUrl: 'https://github.com/moilu/js-movie-app',
                    projectUrl: 'https://moilu.github.io/js-movie-app/',
                },
            ]
        }
    }
}
</script>