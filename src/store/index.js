import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const store = createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async login ({ commit }, payload) {
      const { email, password } = payload
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found')
            break
          case 'auth/wrong-password':
            alert('Wrong password')
            break
          case 'auth/invalid-email':
            alert('Invalid email')
            break
          default:
            // console.log(error.message)
            alert('Something went wrong')
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async register ({ commit }, payload) {
      const { email, password } = payload
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use')
            break
          case 'auth/invalid-email':
            alert('Invalid email')
            break
          case 'auth/operation-not-allowed':
            alert('Operation not allowed')
            break
          case 'auth/weak password':
            alert('Weak password')
            break
          default:
            // console.log(error.message)
            alert('Something went wrong')
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async logout ({ commit }) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  }
})

export default store
