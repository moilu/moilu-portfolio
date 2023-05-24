<script setup>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import SkillsSection from './components/SkillsSection.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import ContactForm from './components/ContactForm.vue';
import FooterLinks from './components/FooterLinks.vue';

components: {
  NavBar,
  Hero,
  SkillsSection,
  About,
  Projects,
  ContactForm,
  FooterLinks
}
</script>

<template>
  <div class="bg-dark font-space-grotesk p-4 md:p-0 space-y-6 w-full text-white">
    <header class="bg-blue-900 flex items-center justify-between md:mx-auto py-4 w-full md:w-4/5 2xl:w-1/3 z-10">
      <NavBar />
    </header>
    <main class="bg-first-pattern bg-no-repeat bg-left-top">
      <Hero />
      <SkillsSection />
      <Projects />
      <About />
    </main>
    <footer class="bg-custom-gray-2 bg-first-pattern bg-no-repeat bg-left pb-8">
      <ContactForm />
      <FooterLinks />
    </footer>
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
}
#app {
  background-color: black;
  color: white;
}
</style>
