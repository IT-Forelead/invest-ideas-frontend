import { defineStore } from 'pinia'

export const useDropDownStore = defineStore('dropdown', {
  state: () => ({
    isOpenProfileDropDown: false,
    isOpenDarkModeDropDown: false,
    isOpenLanguageDropDown: false
  }),
  actions: {
    toggleProfile() {
      this.isOpenProfileDropDown = !this.isOpenProfileDropDown
    },
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
