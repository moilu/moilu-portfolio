<template>
    <nav class="flex items-center justify-between md:mx-auto pt-5 sm:pt-7 md:pt-9 pb-2 px-4 md:px-0 w-full md:w-[90%] 2xl:w-1/2 ">
        <a class="hover:animate-pulse text-[32px]" href="#hero">
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