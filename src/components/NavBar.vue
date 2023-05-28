<template>
    <nav class="flex justify-between md:mx-auto pt-2 pb-2 px-4 md:px-0 w-full md:w-4/5 2xl:w-1/3 ">
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