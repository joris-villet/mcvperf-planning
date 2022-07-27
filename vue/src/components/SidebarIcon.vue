<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.path)
</script>

<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/rendez-vous">
            <i v-if="$route.path === '/rendez-vous'" :style="{'color': '#fff', 'opacity': '1'}" class="icon fa-solid fa-address-book"></i>
            <i v-else class="icon fa-solid fa-address-book"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/calendrier">
            <i v-if="$route.path === '/calendrier'" :style="{'color': '#fff', 'opacity': '1'}" class="icon fa-regular fa-calendar"></i>
            <i v-else class="icon fa-regular fa-calendar"></i>
          </router-link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>
.sidebar {
  min-height: 100vh;
  background: rgb(73,128,246);
  background: linear-gradient(90deg, rgba(73,128,246,1) 0%, rgba(56,65,249,1) 80%); 
  box-shadow: 4px 0px 4px rgb(0,0,0,0.3);
}

ul { 
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1.5rem auto;
}

.icon {
  font-size: 3rem;
  color: rgb(197, 197, 197);
  cursor: pointer;
  opacity: .7;
}

.icon:hover {
  color: #fff;
  opacity: 1;
}

icon.router-link-active,
icon.router-link-exact-active {
  color: red;
  opacity: 1;
}

/* .icon:active {
  color: red;
  opacity: 1;
}

.icon.active {
  color: red;
  opacity: 1;
} */
</style>