<template>
    <nav class="bg-dark md:pt-4 flex justify-between w-full">
        <a class="text-light" href="#">
            moilu
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