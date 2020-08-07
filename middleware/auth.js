export default function ({ store, redirect, app }) {
  if (!app.$cookies.get('token')) {
    return redirect('/login')
  }

  store.dispatch('auth/attempt', app.$cookies.get('token'))

  if (!store.getters["auth/isLoggedIn"]) {
    return redirect('/login')
  }
}
