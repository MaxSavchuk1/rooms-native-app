// import store from '../../store'

export default function authMiddleware (to, from, next) {
  console.log('middleware auth')
  return next()
  // if (1 > 0) {
  //   return next()
  // } else {
  //   store.dispatch('app/setIntendedRoute', to)
  //   next({ name: 'Login' })
  // }
}
