import { defineStore } from 'pinia'

export const useStartupStore = defineStore('startup', {
  state: () => ({
    startups: [],
    selectedStartup: {},
  }),
  actions: {
    setStartups(data) {
      this.startups.push(...data)
    },
    setSelectedStartup(data) {
      this.selectedStartup = data
    },
    clearStore() {
      this.startups = []
    },
  },
})