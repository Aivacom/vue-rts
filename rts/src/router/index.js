import Vue from 'vue'
import Router from 'vue-router'

const author = resolve => require(['@/components/login/author'], resolve)
const error = resolve => require(['@/page/error.vue'], resolve)
const rts_test = resolve => require(['@/components/rts/rts_test.vue'], resolve)

Vue.use(Router);
const routes = [
  {path: '*', component: error},
  {path: '/author', component: author, name: "author" },
  {path: '/rts-test', component: rts_test, name: "rts-test" },
];

const router = new Router({
  mode: 'history',
  base: '/rts/',
  scrollBehavior: () => ({y: 0}),
  routes: routes,
});
export default router;

