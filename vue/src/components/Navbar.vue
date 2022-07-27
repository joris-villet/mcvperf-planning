<script></script>

<template>
  <nav>
    <div class="logo">MCVPerformance</div>
    <ul>
      <li>Se connecter</li>
      <li>S'enregister</li>
    </ul>
  </nav>
</template>


<style scoped>

nav { 
  display: flex;
  justify-content: space-between;
  /*border: 5px solid orange;*/
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
}

ul { 
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
}
.logo {
  font-family: 'Sirin Stencil', cursive;
  font-size: 1.5rem;
  color: transparent;
  background: rgb(21,72,251);
  background: linear-gradient(101deg, rgba(21,72,251,1) 0%, rgba(66,71,111,1) 54%); 
  background-clip: text;
}
</style>