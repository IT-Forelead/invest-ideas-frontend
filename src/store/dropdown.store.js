import { defineStore } from 'pinia'

export const useDropDownStore = defineStore('dropdown', {
  state: () => ({
    isOpenDarkModeDropDown: false,
    isOpenLanguageDropDown: false
  }),
  actions: {
    openDarkModeDropDown() {
      this.isOpenDarkModeDropDown = true
    },
    closeDarkModeDropDown() {
      this.isOpenDarkModeDropDown = false
    },
    openLanguageDropDown() {
      this.isOpenLanguageDropDown = true
    },
    closeLanguageDropDown() {
      this.isOpenLanguageDropDown = false
    },
    clearStore() {
      this.isOpenDarkModeDropDown = false
      this.isOpenLanguageDropDown = false
    },
  },
})
