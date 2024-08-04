<template>
   <UModal v-model="props.isLangModal" :ui="{ base: 'sm:!max-w-[480px] z-[999]' }">
      <div class="flex flex-col p-4 gap-6">
         <div class="flex items-start justify-between">
            <h3 class="text-xl font-medium">Выберите язык</h3>
            <UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeModal" />
         </div>
         <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between">
               <div class="flex items-center gap-2 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                     <g clip-path="url(#clip0_412_8676)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="#F93939" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.5H21V15.5H0V11.5Z" fill="#00B731" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21V4.5H0V0.5Z" fill="#03BCDB" />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M0 5.5H21V10.5H0V5.5ZM5 4.415C4.844 4.47 4.675 4.5 4.5 4.5C3.672 4.5 3 3.828 3 3C3 2.172 3.672 1.5 4.5 1.5C4.675 1.5 4.844 1.53 5 1.585C4.417 1.791 4 2.347 4 3C4 3.653 4.417 4.21 5 4.415Z"
                           fill="white"
                        />
                        <path
                           opacity="0.5"
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M6 2.5H7V3.5H6V2.5ZM7 1.5H8V2.5H7V1.5ZM8 2.5H9V3.5H8V2.5ZM9 1.5H10V2.5H9V1.5ZM10 2.5H11V3.5H10V2.5ZM9 3.5H10V4.5H9V3.5ZM7 3.5H8V4.5H7V3.5Z"
                           fill="#1A47B8"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_412_8676">
                           <rect y="0.5" width="21" height="15" rx="3" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="text-base">O‘zbek</span>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
                  <circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
               </svg>
            </div>
            <div class="flex items-center justify-between">
               <div class="flex items-center gap-2 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                     <g clip-path="url(#clip0_412_8680)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="#1A47B8" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5H21V15.5H0V10.5Z" fill="#F93939" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21V5.5H0V0.5Z" fill="white" />
                     </g>
                     <defs>
                        <clipPath id="clip0_412_8680">
                           <rect y="0.5" width="21" height="15" rx="3" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="text-base">Русский</span>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
                  <circle cx="16" cy="16" r="5" fill="#089E5F" />
               </svg>
            </div>
            <div class="flex items-center justify-between">
               <div class="flex items-center gap-2 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                     <g clip-path="url(#clip0_412_8684)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H9V7.5H0V0.5Z" fill="#1A47B8" />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M9 0.5V1.5H21V0.5H9ZM9 2.5V3.5H21V2.5H9ZM9 4.5V5.5H21V4.5H9ZM9 6.5V7.5H21V6.5H9ZM0 8.5V9.5H21V8.5H0ZM0 10.5V11.5H21V10.5H0ZM0 12.5V13.5H21V12.5H0ZM0 14.5V15.5H21V14.5H0Z"
                           fill="#F93939"
                        />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M1 1.5V2.5H2V1.5H1ZM3 1.5V2.5H4V1.5H3ZM5 1.5V2.5H6V1.5H5ZM7 1.5V2.5H8V1.5H7ZM6 2.5V3.5H7V2.5H6ZM4 2.5V3.5H5V2.5H4ZM2 2.5V3.5H3V2.5H2ZM1 3.5V4.5H2V3.5H1ZM3 3.5V4.5H4V3.5H3ZM5 3.5V4.5H6V3.5H5ZM7 3.5V4.5H8V3.5H7ZM1 5.5V6.5H2V5.5H1ZM3 5.5V6.5H4V5.5H3ZM5 5.5V6.5H6V5.5H5ZM7 5.5V6.5H8V5.5H7ZM6 4.5V5.5H7V4.5H6ZM4 4.5V5.5H5V4.5H4ZM2 4.5V5.5H3V4.5H2Z"
                           fill="white"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_412_8684">
                           <rect y="0.5" width="21" height="15" rx="3" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="text-base">English</span>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
                  <circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
               </svg>
            </div>
         </div>
      </div>
   </UModal>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
   isLangModal: {
      type: Boolean,
      default: false
   }
});

const emit = defineEmits(['update:isLangModal']);

const langModal = ref(props.isLangModal);

watch(langModal, (newVal) => {
   emit('update:isLangModal', newVal);
});

const closeModal = () => {
   langModal.value = false;
   emit('update:isLangModal', false);
};
</script>
