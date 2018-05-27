import Vue from 'vue';
import Router from 'vue-router';

const NotFound = () => import('../views/NotFound.vue');
const Landing = () => import('../views/Landing.vue');

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
         path: '/',
         component: Landing
      },
      {
         path: '*',
         component: NotFound,
      },
    ]
  })
}
