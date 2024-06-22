import { defineStore } from 'pinia';


export const useStore = defineStore('store',()=> {
    const baseUrl = "http://evr.bjst.uz"
    return {
        baseUrl
    }
})