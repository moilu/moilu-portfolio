<template>
    <nav class="bg-dark flex justify-between px-4 md:px-0 md:pt-4 w-full">
        <a class="hover:animate-pulse text-2xl" href="#hero">
            Dev Moilu
        </a>
        <personal-links></personal-links>
    </nav>
</template>
<script>
import PersonalLinks from './fragments/PersonalLinks.vue';

export default {
    name: 'NavBar',
    components: {
        PersonalLinks,
    }
}
</script>