import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
  }),
  actions: {
    setProjects(data) {
      this.projects.push(...data)
    },
    clearStore() {
      this.projects = []
    },
  },
})