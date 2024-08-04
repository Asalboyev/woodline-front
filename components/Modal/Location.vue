<template>
   <UModal v-model="props.isLocationModal" :ui="{ base: 'sm:!max-w-[480px] z-[999]' }">
      <div class="flex flex-col p-4 gap-6">
         <div class="flex items-start justify-between">
            <h3 class="text-xl font-medium">Укажите свой город</h3>
            <UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeModal" />
         </div>
         <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between gap-2">
               <span class="text-base flex-1">Toshkent</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
                  <circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
               </svg>
            </div>
            <div class="flex items-center justify-between gap-2">
               <span class="text-base flex-1">Buxoro viloyati</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
                  <circle cx="16" cy="16" r="5" fill="#089E5F" />
               </svg>
            </div>
         </div>
      </div>
   </UModal>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

const props = defineProps({
   isLocationModal: {
      type: Boolean,
      default: false
   }
});

const emit = defineEmits(['update:isLocationModal']);

const langModal = ref(props.isLocationModal);

watch(langModal, (newVal) => {
   emit('update:isLocationModal', newVal);
});

const closeModal = () => {
   langModal.value = false;
   emit('update:isLocationModal', false);
};
</script>
