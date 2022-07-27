<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { ref } from 'vue'
import { useEventStore } from "@/stores/event.js"
import { onMounted } from 'vue'

const onEventClick = (event, e) => {
  selectedEvent.value = event;
  showDialog.value = true;
  console.log(event.start)
  console.log(event.end)
  console.log(event.content)
  console.log(event.title)

  e.stopPropagation()
}

const selectedEvent = ref({});
const showDialog = ref(false);


const eventStore = useEventStore();

onMounted(() => {
  eventStore.read();
})


</script>


<template>
  <VueCal
    class="vuecal--blue-theme calendar"
    :disable-views="['years', 'year']" 
    :time-from="8 * 60"
    :time-to="20 * 60"
    :on-event-click="onEventClick"
    click-to-navigate
    :editable-events="{ title: true, delete: true }"
    locale="fr"
    :events="eventStore.events"
  />
</template>



<style scoped>
  /* .calendar {
    margin-top: 2rem;
  } */
</style>