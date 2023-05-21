<template>
    <footer class="bg-custom-gray-2 flex justify-between">
        <a class="text-light" href="#">moilu</a>
        <personal-links></personal-links>
    </footer>
</template>

<script>
import PersonalLinks from './fragments/PersonalLinks.vue';

export default {
    name: 'Footer',
    components: {
        PersonalLinks,
    }
}
</script>