<script setup>
import Header from '@/components/Header.vue'
import SidebarIcon from '@/components/SidebarIcon.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useEventStore } from '@/stores/event.js'
import flatPickr from 'vue-flatpickr-component';
import { French } from "flatpickr/dist/l10n/fr.js"
import 'flatpickr/dist/flatpickr.css';

const config = ref({
  //wrap: true, 
  //altFormat: 'M j, Y',
  dateFormat: "Y-m-d H:i",
  //altInput: true,
  enableTime: true,
  locale: French          
})

const eventStore = useEventStore();


</script>

<template>
  <Header />
  <section>
    <SidebarIcon />
    <article>
      <div class="top-content">
        <div class="back-btn">
          <RouterLink to="/">
            <button>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
          </RouterLink>
        </div>
        
      </div>
      <div class="container">

        <div class="container__form">
          <form>
            <flat-pickr
              v-model="eventStore.start"
              :config="config"
              placeholder="date du début de rendez-vous"
              name="date"
            />
            <flat-pickr
              v-model="eventStore.end"
              :config="config"
              placeholder="fin rendezvous"
            />
            <label>
              <input v-model="eventStore.title" type="text" placeholder="voiture">
            </label>
            <label>
              <input v-model="eventStore.content" type="text" placeholder="stage ? ethanol ?">
            </label>
            <button @click.prevent="eventStore.create">Valider</button>
          </form>
        </div>

      </div>
    </article>
  </section>
</template>

<style scoped>
.top-content {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.back-btn {
  margin: 0 auto;
}

.back-btn button {
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  border-radius: 5px;
  padding: .5rem;
  background-image: linear-gradient(to right bottom, rgb(87, 164, 236), rgb(86, 67, 250));
  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.3);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1000;
}
</style>