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
  <div class="bg-dark font-space-grotesk space-y-6 w-full text-white">
    <header class="bg-dark sticky top-0 z-10">
      <NavBar />
    </header>
    <main class="">
      <Hero />
      <SkillsSection />
      <Projects />
      <About />
    </main>
    <footer class="bg-custom-gray-2 pb-4">
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
