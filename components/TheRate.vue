<template>
   <div class="flex gap-1">
      <svg v-for="star in 5" :key="star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            @mouseenter="!props.disabled ? (starValue = star) : null"
            :style="{ 'pointer-events': props.disabled ? 'none' : 'auto', fill: star <= starValue ? '#F2994A' : '#C2C2C3', cursor: props.disabled ? 'default' : 'pointer' }"
            class="duration-200"
            d="M6.6887 2.18062C7.22516 1.05047 8.77516 1.05047 9.31162 2.18061L10.2388 4.13379C10.4518 4.58257 10.8636 4.89363 11.3399 4.9656L13.4131 5.2788C14.6126 5.46003 15.0916 6.9927 14.2236 7.8724L12.7234 9.39273C12.3788 9.74206 12.2215 10.2454 12.3028 10.7386L12.657 12.8854C12.8619 14.1275 11.6079 15.0748 10.535 14.4883L8.68071 13.4747C8.25466 13.2419 7.74567 13.2419 7.31961 13.4747L5.46534 14.4883C4.39242 15.0748 3.13844 14.1275 3.34335 12.8854L3.69749 10.7386C3.77886 10.2454 3.62157 9.74206 3.27688 9.39274L1.77675 7.8724C0.90874 6.9927 1.38771 5.46003 2.58727 5.2788L4.66041 4.9656C5.13676 4.89363 5.54854 4.58257 5.76157 4.13379L6.6887 2.18062Z"
         />
      </svg>
   </div>
</template>
<script setup>
const props = defineProps({
   defaultValue: {
      type: Number,
      default: 0
   },
   disabled: {
      type: Boolean,
      default: false
   }
});

const starValue = ref(props.defaultValue);
</script>
<style></style>
