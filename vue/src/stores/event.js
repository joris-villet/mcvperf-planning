import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore({
  id: 'event',
  state: () => ({
    start: "",
    end: null,
    title: null,
    content: null,
    events: []
    // events: [
    //   {
    //     start: '2022-07-21 12:00:00',
    //     end: '2022-07-21 14:00:00',
    //     // You can also define event dates with Javascript Date objects:
    //     // start: new Date(2018, 11 - 1, 16, 10, 30),
    //     // end: new Date(2018, 11 - 1, 16, 11, 30),
    //     title: 'stage 1',
    //     content: 'audi a3 tdi 130',
    //     phone: "0632374870",
    //     name: "jojo",
    //     class: 'sport'
    //   },
    //   {
    //     start: '2022-07-17 14:30',
    //     end: '2022-07-17 16:30',
    //     title: 'audi a3 tdi 130',
    //     content: 'vidange ma couille',
    //     class: 'sport'
    //   },
    // ]
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {

    create() {
      console.log(new Date(this.start))
      console.log(new Date(this.end))
      console.log("title => ", this.title)
      console.log("content => ", this.content)
      console.log("je crée l'event")

      // axios.post(`${import.meta.env.VITE_BASE_URL}/rdv/create`, {
      //   start: this.start,
      //   end: this.end,
      //   title: this.title,
      //   content: this.content
      // })
      //   .then(({ data }) => console.log("data => ", data))
      //   .catch(err => console.log(err))

    },

    read() {
      axios.get(`${import.meta.env.VITE_BASE_URL}/rdv/read`)
        .then(({ data }) => {
          
          this.events = data.map(el => {
            return {
              start: el.start.split('T').join(' ').split('.000Z').join(''),
              end: el.end.split('T').join(' ').split('.000Z').join(''),
              title: el.title,
              content: el.content
            }
          })
          

        })
        .catch(err => console.log(err))

        console.log("events => ", this.events);
    }

  }
})
