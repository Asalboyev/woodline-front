<template>
   <header class="bg-grey-hero">
      <div class="wrapper py-6 lg:py-20 grid grid-cols-1 lg:grid-cols-2 lg:items-center relative">
         <div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-medium leading-[120%]">Офисная мебель как визитная карточка компании</h1>
            <p class="mt-10 text-xl">Успей на последнюю паспродаю весны</p>
            <UButton
               size="xl"
               :ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
               class="text-base mt-6"
               variant="solid"
               label="Купить"
               trailing-icon="i-heroicons-chevron-double-right"
            >
            </UButton>
         </div>
         <div class="hidden lg:flex">
            <img class="scale-x-[-1] w-full" src="~/assets/images/png/hero.png" alt="hero img" />
         </div>
         <div class="absolute sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-4 lg:flex hidden">
            <UButton size="xl" color="grey" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-chevron-left" class="bg-[rgba(0,0,0,0.08)] text-black" />
            <UButton size="xl" color="grey" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-chevron-right" class="bg-[rgba(0,0,0,0.08)] text-black" />
         </div>
      </div>
   </header>
</template>
