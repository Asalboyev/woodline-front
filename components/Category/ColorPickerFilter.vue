<template>
   <div :style="{ width: fit ? 'fit-content' : '100%' }" class="flex flex-wrap gap-3">
      <button @click="handleColor(color.id)" :style="{
         borderColor: checkIfNotWhite(color.name) ? color.name : '#EBEBEB',
         background: checkIfNotWhite(color.name) ? '' : '#EBEBEB',
         borderRadius: rectangle ? '5px' : '100%'
      }" v-for="color in colors" :key="color.id"
         class="col-span-1 outline-none cursor-pointer border relative h-10 w-10 overflow-hidden">
         <div :style="{
            backgroundColor: color.name,
            borderRadius: rectangle ? '5px' : '100%'
         }" :class="{ 'scale-[70%]': attributes.includes(color.id) }"
            class="absolute duration-200 top-0 left-0 w-full h-full rounded-full"></div>
      </button>
   </div>
</template>

<script setup>
const route = useRoute();
const attributes = computed(() => {
   return route.query.attributes ? route.query.attributes.split(',').map(el => parseInt(el)) : [];
});


const props = defineProps(['colors', 'fit', 'rectangle']);

function handleColor(color) {
   if (attributes.value.includes(color)) {
      navigateTo({
         query: {
            ...route.query,
            attributes: `${attributes.value.filter((item) => item != color)}`
         }
      });
   } else {
      navigateTo({
         query: {
            ...route.query,
            attributes: `${[...attributes.value, color]}`
         }
      });
   }
}

function checkIfNotWhite(hex) {
   const hexCode = hex.charAt(0) === '#'
      ? hex.substr(1, 6)
      : hex;

   const hexR = parseInt(hexCode.substr(0, 2), 16);
   const hexG = parseInt(hexCode.substr(2, 2), 16);
   const hexB = parseInt(hexCode.substr(4, 2), 16);
   // Gets the average value of the colors
   const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

   return contrastRatio >= 0.5
      ? false
      : true;
}
</script>

<style scoped></style>
