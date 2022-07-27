<script setup>
import Navbar from '@/components/Navbar.vue'
</script>



<template>
  <header>
    <Navbar />
  </header>
</template>


<style scoped>
header {
  background: rgb(66,66,66);
  background: linear-gradient(101deg, rgba(66,66,66,1) 0%, rgba(185,185,185,1) 82%);  
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 60px;
  box-shadow: 0px 1px 5px rgb(0,0,0,0.2);
}
</style>