import { defineStore } from 'pinia'

export const useIdeaStore = defineStore('idea', {
  state: () => ({
    ideas: [],
    selectedIdea: {},
    selectedIdeaId: '',
    searchingTitle: '',
  }),
  actions: {
    setIdeas(data) {
      this.ideas.push(...data)
    },
    setSelectedIdea(data) {
      this.selectedIdea = data
    },
    setSelectedIdeaId(data) {
      this.selectedIdeaId = data
    },
    setSearchingTitle(data) {
      this.searchingTitle = data
    },
    clearStore() {
      this.ideas = []
    },
  },
})