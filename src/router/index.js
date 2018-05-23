import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/SideBar'
import ClusterState from '@/components/ClusterState'
import UserManagement from '@/components/UserManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClusterState',
      components: {
        default: SideBar,
        main: ClusterState
      }
    }, {
      path: '/clusterState',
      name: 'ClusterState',
      components: {
        default: SideBar,
        main: ClusterState
      }
    }, {
      path: '/userManagement',
      name: 'UserManagement',
      components: {
        default: SideBar,
        main: UserManagement
      }
    }
  ]
})
