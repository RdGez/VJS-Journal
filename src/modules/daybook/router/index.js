export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName: "Daybook" */ '../layouts/DayBookLayout.vue'),
  children: []
}