
export default {
  name: 'auth',
  component: () => import(/* webpackChunkName: "Auth" */ '../layouts/AuthLayout.vue'),
  children: []
}