import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    projectCategories: [],
  }),
  actions: {
    setCategories(data) {
      this.categories.push(...data)
    },
    setProjectCategories(data) {
      this.projectCategories.push(...data)
    },
    clearStore() {
      this.categories = []
      this.projectCategories = []
    },
  },
})