<template>
   <div>
      <TheHeader />
      <slot></slot>
      <!-- <TheSocialLinks /> -->
      <TheFooter />
   </div>
</template>
<script setup>
import { useCategories } from '~/stores/categories';
useAsyncData('categories', () => useCategories().getCategories());

const { locale } = useI18n();

watch(locale, async() => {
   await useCategories().getCategories();
});
</script>
