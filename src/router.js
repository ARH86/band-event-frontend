import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Events from './views/Events.vue';
import Band from './views/Band.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/events', name: 'events', component: Events},
    { path: '/band', name: 'band', component: Band},

    { path: '/signup', name: 'signup', component: Signup},
    { path: '/login', name: 'login', component: Login},
    { path: '/logout', name: 'logout', component: Logout}
    

  ]
});
