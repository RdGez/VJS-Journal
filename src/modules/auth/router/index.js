
export default {
  name: 'auth',
  component: () => import(/* webpackChunkName: "Auth" */ '../layouts/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'signin',
      component: () => import(/* webpackChunkName: "SignIn" */ '../views/LoginView.vue')
    },
    {
      path: 'signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "SignUp" */ '../views/RegisterView.vue')
    }
  ]
}