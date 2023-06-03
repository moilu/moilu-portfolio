<template>
    <div class="group mt-10 relative">
        <a :href="project.projectUrl" target="_blank">
            <img class="h-[329px] w-full" :src="`src/assets/${project.img.src}`" :alt="project.img.alt">
        </a>
        <h3 class="mt-5 fold-bold text-2xl">{{ project.name }}</h3>
        <p class="mt-2 text-base">{{ project.stack }}</p>
        <ul class="flex gap-4 mt-5">
            <li><a class="hover:animate-pulse decoration-2 decoration-custom-blue text-base underline underline-offset-8" :href="project.projectUrl" target="_blank">VIEW PROJECT</a></li>
            <li><a class="hover:animate-pulse decoration-2 decoration-custom-blue text-base underline underline-offset-8" :href="project.codeUrl" target="_blank">VIEW CODE</a></li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        required: true
    },
}
</script>