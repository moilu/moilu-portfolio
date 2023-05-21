<script setup>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import SkillsSection from './components/SkillsSection.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';

components: {
  NavBar,
  Hero,
  SkillsSection,
  About,
  Projects,
  Footer
}
</script>

<template>
  <div class="bg-dark font-space-grotesk md:mx-auto p-8 md:p-0 space-y-6 w-full md:w-3/4 xl:w-1/3 text-white">
    <header class="flex justify-between items-center sticky top-0 z-10 py-4 bg-blue-900">
      <NavBar />
    </header>
    <main>
      <Hero />
      <SkillsSection />
      <Projects />
      <About />
      <!-- Contact form -->
    </main>
    <Footer />
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
