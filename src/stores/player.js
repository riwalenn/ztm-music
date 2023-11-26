import { defineStore } from 'pinia'

export default defineStore('player', {
  actions: {
    state: () => ({
      current_song: {}
    }),
    async newSong(song) {
      this.current_song = song
    }
  }
})
