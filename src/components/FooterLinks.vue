<template>
    <section class="pt-8 md:mx-auto w-full md:w-4/5 2xl:w-1/3">
        <line-break></line-break>
        <div class="flex justify-between mt-10">
            <a class="text-2xl" href="#">moilu</a>
            <personal-links></personal-links>
        </div>
    </section>
</template>

<script>
import PersonalLinks from './fragments/PersonalLinks.vue';
import LineBreak from './fragments/LineBreak.vue';

export default {
    name: 'Footer',
    components: {
        PersonalLinks,
        LineBreak
    }
}
</script>