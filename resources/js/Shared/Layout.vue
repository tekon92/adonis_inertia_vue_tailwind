<template>
  <main>
    <Header />
    <article>
      <slot />
    </article>
    <Footer />
  </main>
</template>

<script>
import Footer from '../Shared/Footer.vue'
import Header from '../Shared/Header.vue'

export default {
  components: {
    Footer,
    Header
  },
};
</script>

<style>
</style>