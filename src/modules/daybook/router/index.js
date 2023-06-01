export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName: "Daybook" */ '../layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "NoEntrySelected" */ '../views/NoEntrySelected.vue')
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import(/* webpackChunkName: "EntryView" */ '../views/EntryView.vue'),
      props: (route) => {
        return { id: route.params.id }
      }
    }
  ]
}