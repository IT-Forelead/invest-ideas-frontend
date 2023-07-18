import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    selectedProject: {},
  }),
  actions: {
    setProjects(data) {
      this.projects.push(...data)
    },
    setSelectedProject(data) {
      this.selectedProject = data
    },
    clearStore() {
      this.projects = []
    },
  },
})