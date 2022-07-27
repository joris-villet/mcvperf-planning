<script setup>

import { RouterView } from 'vue-router'

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap');

/* #app {
  margin: 0;
  padding: 0;
  background: #f1f1f1;
  overflow: hidden;
} */

body { 
  padding: 0;
  margin: 0;
  background: #f1f1f1;
  /* overflow: hidden; */
}

section { 
  display: grid;
  grid-template-columns: 250px 1fr;
}

</style>
