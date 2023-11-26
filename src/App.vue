<template>
  <app-header />

  <router-view></router-view>

  <app-player />

  <app-auth />
</template>
<script>
import AppHeader from '@/components/Header.vue'
import AppAuth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'
import AppPlayer from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
