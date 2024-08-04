<template>
   <main>
      <div class="wrapper sm:py-20 space-y-10 sm:space-y-20">
         <section class="space-y-10 sm:block hidden">
            <h1 class="font-medium text-3xl">Все категории</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10">
               <ULink v-for="category in categories" :key="category.id"
                  class="space-y-2 group flex flex-col items-center" :to="`/categories/${category.slug}`">
                  <div
                     class="h-[220px] w-[220px] rounded-full overflow-hidden flex items-center justify-center bg-grey">
                     <img class="object-contain w-full h-full" :src="category.lg_img" :alt="category.name" />
                  </div>
                  <p class="text-center font-medium text-[#353437] group-hover:text-green duration-200">{{ category.name }}</p>
               </ULink>
            </div>
         </section>
         <section class="sm:hidden relative overflow-hidden">
            <transition mode="out-in" name="fade">
               <div v-if="!isCategoryIdVisible" class="flex flex-col gap-6">
                  <h3 class="text-lg font-medium">Категории</h3>
                  <nav class="flex flex-col gap-6">
                     <button class="flex items-center gap-4 text-grey-2 hover:text-green" v-for="category in categories"
                        :key="category.id" @click="categoriesSwitched(category.id)">
                        <span>- {{ category.name }}</span>
                     </button>
                  </nav>
               </div>
               <div v-else class="w-full h-full bg-white z-10 transition">
                  <div class="flex flex-col gap-6">
                     <div class="flex items-center gap-2 -ml-2">
                        <button class="text-lg font-medium flex items-center gap-1" @click="isCategoryIdVisible = false">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                              fill="none">
                              <path d="M14 7.5L10 12.5L14 17.5" stroke="#020105" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" />
                           </svg>
                           {{ categoryWithId.name }}
                        </button>
                     </div>
                     <div class="flex flex-col gap-6">
                        <UAccordion color="white" variant="soft" :items="items" :ui="{ default: { class: 'px-0' } }">
                           <template #default="{ item, open }">
                              <UButton v-if="!item.disabled" variant="ghost" color="white"
                                 :ui="{ rounded: 'rounded-none', padding: { sm: 'py-3 px-0' } }">
                                 <!-- <span class="truncate" @click="open = false; navigateTo(item.to)">{{ item.label }}</span> -->
                                 <span class="truncate">{{ item.label }}</span>
                                 <template #trailing>
                                    <UIcon name="i-heroicons-chevron-right-20-solid"
                                       class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                       :class="[open && 'rotate-90']" />
                                 </template>
                              </UButton>
                              <UButton @click="navigateTo(item.to)" v-else variant="ghost" color="white" class="!opacity-100"
                                 :ui="{ rounded: 'rounded-none', padding: { sm: 'py-3 px-0' } }" :label="item.label">
                              </UButton>
                           </template>
                           <template #item="{ item }">
                              <nav class="flex flex-col gap-4">
                                 <NuxtLink v-for="subCategory in item.subChildren" :key="subCategory.id"
                                    :to="subCategory.to" class="text-sm font-normal text-grey-2">- {{ subCategory.label
                                    }}
                                 </NuxtLink>
                              </nav>
                           </template>
                        </UAccordion>
                     </div>
                  </div>
               </div>
            </transition>
         </section>
         <div class="rounded-3xl">
            <ULink to="/" class="block w-full">
               <img class="w-full" src="~/assets/images/png/home-banner-1.png" alt="home banner" />
            </ULink>
         </div>
         <section class="space-y-10">
            <div class="flex items-center justify-between">
               <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium">Популярные товары</h3>
               <UButton size="xl"
                  :ui="{ padding: { xl: 'p-1 sm:px-6 sm:py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-4 w-4 md:h-5 md:w-5' } } }"
                  class="text-sm md:text-base hover:bg-transparent text-grey-2" variant="ghost" label="Подробноее"
                  trailing-icon="i-heroicons-chevron-double-right">
               </UButton>
            </div>
            <div class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 sm:gap-y-10">
               <TheCard v-for="item in 8" :key="item" />
            </div>
         </section>
         <section>
            <TheDescription />
         </section>
      </div>
   </main>
</template>
<script setup>
import { useCategories } from '~/stores/categories';
const { categories } = storeToRefs(useCategories());
const categoryWithId = ref(null);

const items = computed(() => [
   ...categoryWithId.value?.children.map((child, idx) => ({
      label: child.name,
      to: `/categories/${child.slug}`,
      defaultOpen: idx === 0 ? true : false,
      subChildren: child?.children.map((subChild) => ({
         id: subChild.id,
         label: subChild.name,
         to: `/categories/${subChild.slug}`
      })) || [],
      disabled: child?.children.length === 0
   }))
]);

const isCategoryIdVisible = ref(false);

const categoriesSwitched = (id) => {
   isCategoryIdVisible.value = true;
   categoryWithId.value = categories.value.find((category) => category.id === id);
}
</script>
