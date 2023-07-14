import { defineStore } from 'pinia'

export const useStartupStore = defineStore('startup', {
  state: () => ({
    startups: [],
    contributors: [],
    selectedStartup: {},
  }),
  actions: {
    setStartups(data) {
      this.startups.push(...data)
    },
    setContributors(data) {
      this.contributors.push(...data)
    },
    setSelectedStartup(data) {
      this.selectedStartup = data
    },
    clearStore() {
      this.startups = []
      this.contributors = []
    },
  },
})