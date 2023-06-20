import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    setCurrentMode(data) {
      this.isDarkMode = data
    },
  },
})
