import { defineStore } from 'pinia'
import { Howl } from 'howler'

export default defineStore('player', {
  actions: {
    state: () => ({
      current_song: {},
      sound: {}
    }),
    async newSong(song) {
      this.current_song = song

      this.sound = new Howl({
        src: [song.url],
        html5: true
      })

      this.sound.play()
    }
  }
})
