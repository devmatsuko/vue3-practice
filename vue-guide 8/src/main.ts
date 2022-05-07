import { createApp } from 'vue'
import App from './App.vue'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', redirect: '/reservations' },
//     {
//       path: '/users', component: UserList, name: 'users', children: [
//         { path: '/users/:id', components: { default: UserDetail, footer: UserFooter } },
//       ]
//     },
//     { path: '/reservations', component: ReservationList },
//     { path: '/:notFound(.*)', redirect: '/' }
//   ]
// })

// // router.beforeEach((to, from, next) => {
// //   console.log('Guard ', to, from)
// //   next()
// //   // next(false)
// //   // next({ name: 'users' })
// // })

const app = createApp(App)
app.mount('#app')
