import { defineStore } from 'pinia'

export const useStartupStore = defineStore('startup', {
  state: () => ({
    startups: [],
    contributors: [],
    startupLanguages: [],
    selectedStartup: {},
  }),
  actions: {
    setStartups(data) {
      this.startups.push(...data)
    },
    setContributors(data) {
      this.contributors.push(...data)
    },
    setStartupLanguages(data) {
      this.startupLanguages = data
    },
    setSelectedStartup(data) {
      this.selectedStartup = data
    },
    clearStore() {
      this.startups = []
      this.contributors = []
      this.startupLanguages = []
    },
  },
})