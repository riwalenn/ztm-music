import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register() {}
  }
})
