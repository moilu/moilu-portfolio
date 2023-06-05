<template>
    <section class="mt-8 md:mx-auto pt-8 px-4 md:px-0 w-full md:w-[90%] 2xl:w-[55%]">
        <line-break></line-break>
        <div class="flex justify-between mt-10">
            <a class="hover:animate-pulse text-2xl" href="#hero">Dev Moilu</a>
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