<template>
	<main>
		<div class="wrapper py-20">
			<div class="flex justify-between items-center mb-10">
				<p class="font-medium text-lg md:text-2xl xl:text-3xl">Результаты поиска по запросу <span class="text-green">Угловые диваны</span></p>
				<!-- <div class="hidden lg:flex items-center gap-4">
					<p class="text-sm text-grey-4">Сортировка</p>
					<USelectMenu
						variant="outline"
						size="lg"
						:options="['По популярности', 'По цене', 'По новизне']"
						placeholder="Подешевле"
						:ui="{
							padding: { lg: 'px-4 py-3' },
							rounded: 'rounded-xl',
							color: {
								white: {
									outline: 'shadow-none ring-grey-0 '
								}
							}
						}"
					/>
				</div> -->
			</div>
			<div class="lg:hidden flex flex-col gap-4 mb-4">
				<div class="flex items-center justify-between">
					<UButton size="xl" :ui="{ padding: { xl: 'p-1' }, rounded: 'rounded-lg' }" class="hover:bg-transparent text-grey-header" variant="ghost" label="Фильтры">
						<template #leading>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
								<path d="M2.5 5.5H8.33333" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M2.5 10.5H10" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M15.8333 10.5H17.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M11.6667 5.5L17.5 5.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.8333 15.5L16.6666 15.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M2.5 15.5H5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<circle cx="6.66667" cy="15.5002" r="1.66667" stroke="#353437" stroke-width="1.5" />
								<ellipse cx="14.1667" cy="10.5002" rx="1.66667" ry="1.66667" stroke="#353437" stroke-width="1.5" />
								<ellipse cx="9.99998" cy="5.50016" rx="1.66667" ry="1.66667" stroke="#353437" stroke-width="1.5" />
							</svg>
						</template>
					</UButton>
					<USelectMenu
						variant="outline"
						size="lg"
						:options="['По популярности', 'По цене', 'По новизне']"
						placeholder="Подешевле"
						:ui="{
							padding: { lg: 'p-1' },
							rounded: 'rounded-lg',
							color: {
								white: {
									outline: 'shadow-none ring-grey-0 ring-0 text-header'
								}
							}
						}"
					/>
				</div>
			</div>
			<section>
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div class="lg:col-span-3 hidden lg:block">
						<div class="sticky top-36 flex flex-col gap-8 w-full">
							<div class="flex flex-col gap-6">
								<h3 class="text-xl font-medium">Категории</h3>
								<nav class="flex flex-col gap-4 ml-6">
									<NuxtLink to="/" class="text-grey-2 text-base hover:text-green">Диваны прямые</NuxtLink>
									<NuxtLink to="/" class="text-grey-2 text-base hover:text-green">Диваны прямые</NuxtLink>
									<NuxtLink to="/" class="text-grey-2 text-base hover:text-green">Диваны прямые</NuxtLink>
									<NuxtLink to="/" class="text-grey-2 text-base hover:text-green">Диваны прямые</NuxtLink>
								</nav>
							</div>
							<div class="flex flex-col gap-8">
								<div class="space-y-4">
									<h4 class="font-medium text-xl">Цена</h4>
									<div class="flex gap-3">
										<UInput size="lg" :ui="{ rounded: 'lg', padding: { lg: 'px-4' }, color: { white: { outline: 'shadow-none ring-grey-3' } } }" class="w-1/2">
											<template #leading>
												<span class="text-grey-1 text-sm">от</span>
											</template>
										</UInput>
										<UInput size="lg" :ui="{ rounded: 'lg', padding: { lg: 'px-4' }, color: { white: { outline: 'shadow-none ring-grey-3' } } }" class="w-1/2">
											<template #leading>
												<span class="text-grey-1 text-sm">до</span>
											</template>
										</UInput>
									</div>
								</div>
								<div class="space-y-4">
									<div class="flex justify-between items-center">
										<h4 class="font-medium text-xl">Цвет</h4>
										<UButton variant="ghost" label="очистить" class="underline text-grey-4 text-sm" />
									</div>
									<CategoryColorPickerFilter
										:colors="[
											{ id: 1, name: '#FF0000' },
											{ id: 2, name: '#00FF00' },
											{ id: 3, name: '#0000FF' },
											{ id: 4, name: '#FFFF00' },
											{ id: 5, name: '#FF00FF' },
											{ id: 6, name: '#00FFFF' },
											{ id: 7, name: '#000000' },
											{ id: 8, name: '#FFFFFF' }
										]"
									/>
								</div>
								<div class="space-y-4">
									<h4 class="font-medium text-xl">Тип материала</h4>
									<div class="space-y-2">
										<UCheckbox :ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }" label="Эко-кожа" />
										<UCheckbox :ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }" label="Сетка" />
									</div>
								</div>
								<div class="space-y-4">
									<h4 class="font-medium text-xl">Материал корпуса</h4>
									<div class="space-y-2">
										<UCheckbox :ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }" label="ДСП" />
										<UCheckbox :ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }" label="МДФ" />
										<UCheckbox :ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }" label="Шпон" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="lg:col-span-9 flex flex-col gap-10">
						<div class="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 sm:gap-y-10">
							<TheCard v-for="(product, i) in search.products" :data="product" :key="i" />
						</div>
						<UButton block label="Показать еще +24" class="text-green bg-grey" color="grey" size="xl" :ui="{ rounded: 'rounded-full', padding: { xl: 'px-3 py-3' } }" />
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script setup>
import { useSearchStore } from '~/stores/search';
import { useRoute } from 'vue-router';

const route = useRoute();

const searchStore = useSearchStore();

const { getSearch } = searchStore;

const { data: search } = await useAsyncData('search', () => getSearch(route.query.search), {
	watch: [() => route.query.search]
});
</script>
