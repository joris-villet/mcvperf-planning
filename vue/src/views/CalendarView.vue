<script setup>
import Header from '@/components/Header.vue'
import SidebarIcon from '@/components/SidebarIcon.vue'
import Calendar from '@/components/Calendar.vue'
import 'vue-cal/dist/i18n/fr.js'
import { RouterLink } from 'vue-router'

function customEventCreation () {
    // const dateTime = prompt('Create event on (YYYY-MM-DD HH:mm)', '2022-07-15 13:15')

    // // Check if date format is correct before creating event.
    // if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateTime)) {
    //   this.$refs.vuecal.createEvent(
    //     // Formatted start date and time or JavaScript Date object.
    //     dateTime,
    //     // Event duration in minutes (Integer).
    //     120,
    //     // Custom event props (optional).
    //     { title: 'New Event', content: 'yay! 🎉', class: 'blue-event' }
    //   )
    // } else if (dateTime) alert('Wrong date format.')
}


</script>

<template>
  <Header />
  <section>
    <SidebarIcon />
    <article>
      <RouterLink to="/">
        <div class="top-content">
          <div class="back-btn">
            <button>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
          </div>
          <div>
            <button>
              <router-link to="/rendez-vous">
                Créer un rendez-vous
              </router-link>
            </button>
          </div>
        </div>
      </RouterLink>
      <Calendar />
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



