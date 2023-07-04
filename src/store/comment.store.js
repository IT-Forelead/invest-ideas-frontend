import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    comments: [],
  }),
  actions: {
    setComments(data) {
      this.comments.push(...data)
    },
    clearStore() {
      this.comments = []
    },
  },
})