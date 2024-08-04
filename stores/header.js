import { defineStore } from 'pinia';

export const useHeader = defineStore('header', () => {
  const isCategoryOpened = ref(false);

  return {
    isCategoryOpened
  };
});
