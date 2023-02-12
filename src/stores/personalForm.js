import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const formItems = defineStore('personalForm', {
    state: () => ({
        name: '',
        badgeNumber: '',
        servingTime: '',
        rank: '',
        lineOne: '',
        lineTwo: '',
        lineThree: '',
        lineFour: '',
    })
})