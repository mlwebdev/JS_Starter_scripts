import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VehicleComponent from '@/components/vehicle'
import UserComponent from '@/components/user'
import MaintenanceComponent from '@/components/maintenance' 


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: VehicleComponent
    },
    {
      path: '/user',
      name: 'User',
      component: UserComponent
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceComponent
    }
  ]
})
