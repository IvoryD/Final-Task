import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import CreateEvent from '../views/CreateEvent.vue'
import OpenEvent from '../views/OpenEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'eventList',
    component: EventList
  },

  {
  
    path: '/createEvent',
    name: 'createEvent',
    component: CreateEvent
  },

  {
    path: '/openEvent/:eventId',
    name: 'openEvent',
    component: OpenEvent,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
