<template>
	<main>
		<div class="wrapper py-20">
			<section v-show="category?.category.children.length > 0" class="space-y-8">
				<div class="flex justify-between items-center">
					<h1 class="font-medium text-lg lg:text-3xl">{{ category?.category.name }}</h1>
					<div class="flex gap-4">
						<UButton
							@click="categorySwiper.slidePrev()"
							size="lg"
							color="grey"
							:ui="{ rounded: 'rounded-full', icon: { size: { lg: 'h-4 w-4' } } }"
							icon="i-heroicons-chevron-left"
							class="bg-[rgba(0,0,0,0.08)] text-black"
						/>
						<UButton
							@click="categorySwiper.slideNext()"
							size="lg"
							color="grey"
							:ui="{ rounded: 'rounded-full', icon: { size: { lg: 'h-4 w-4' } } }"
							icon="i-heroicons-chevron-right"
							class="bg-[rgba(0,0,0,0.08)] text-black"
						/>
					</div>
				</div>

				<Swiper @swiper="onSwiper" :space-between="12" :breakpoints="breakpointsCategory">
					<SwiperSlide v-for="subCategory in category?.category.children" :key="subCategory.id">
						<ULink :to="`/categories/${subCategory.slug}`" class="space-y-2 group flex flex-col gap-2">
							<div class="bg-grey rounded-2xl p-2 h-[220px]">
								<img :src="subCategory && subCategory.lg_img ? subCategory.lg_img : '/assets/images/png/product.jpg'" class="h-full w-full object-contain" :alt="subCategory?.name" />
							</div>
							<div class="p-2 max-w-[80%] w-full mx-auto">
								<p class="font-medium text-center group-hover:text-green duration-200">{{ subCategory.name }}</p>
							</div>
						</ULink>
					</SwiperSlide>
				</Swiper>
			</section>
			<section class="mt-8">
				<div class="flex justify-between items-center">
					<h2 class="font-medium text-lg lg:text-3xl">Все товары в {{ category?.category.name }}</h2>
					<div class="hidden lg:flex items-center gap-4">
						<p class="text-sm text-grey-4">Сортировка</p>
						<USelectMenu variant="outline" size="lg" v-model="sorted" :options="sortingAttributes" :ui="{ color: { white: { outline: 'shadow-none ring-grey-0 ring-0' } } }" />
					</div>
				</div>
				<div class="lg:hidden flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<UButton @click="sortedModal = true" size="xl" :ui="{ padding: { xl: 'p-1' }, rounded: 'rounded-lg' }" class="hover:bg-transparent text-grey-header" variant="ghost" label="Фильтры">
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
							v-model="sorted"
							:options="['По популярности', 'По цене', 'По новизне']"
							:ui="{ color: { white: { outline: 'shadow-none ring-grey-0 ring-0' } } }"
						/>
					</div>
				</div>
			</section>
			<section class="mt-8">
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 relative items-start">
					<div class="lg:col-span-3 hidden lg:flex flex-col gap-8 sticky top-36">
						<h3 class="font-medium text-2xl">Фильтр</h3>
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
								<UButton @click="clearColors" variant="ghost" label="очистить" class="underline text-grey-4 text-sm" />
							</div>
							<CategoryColorPickerFilter :colors="colorsCategory.options" />
						</div>
						<div v-for="attribute in category?.attributes.filter((attr) => attr.name !== 'Цвет' && attr.name !== 'Color' && attr.name !== 'Rangi')" :key="attribute.id" class="space-y-4">
							<h4 class="font-medium text-xl">{{ attribute.name }}</h4>
							<div class="space-y-2">
								<UCheckbox
									v-for="option in attribute.options"
									:key="option.id"
									@click="addAttribute(option.id)"
									v-model="attributes[option.id]"
									:checked="route.query.attributes?.split(',').includes(`${option.id}`)"
									:ui="{ label: 'text-black cursor-pointer', base: 'cursor-pointer' }"
									:value="option.id"
									:label="option.name"
								/>
							</div>
						</div>
					</div>
					<div class="lg:col-span-9 flex flex-col gap-10">
						<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-x-4 sm:gap-y-10">
							<TheCard v-for="product in category?.products.data" :data="product.products[0]" :key="product.id" />
						</div>
						<UButton block label="Показать еще +24" class="text-green bg-grey" color="grey" size="xl" :ui="{ rounded: 'rounded-full', padding: { xl: 'px-3 py-3' } }" />
					</div>
				</div>
			</section>
			<section class="mt-20">
				<TheDescription />
			</section>
		</div>
		<UModal v-model="sortedModal">
			<div class="flex flex-col gap-6 p-4">
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-medium flex-1">Фильтры</h3>
					<svg @click="sortedModal = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="cursor-pointer">
						<path d="M16.2427 7.75738L7.75739 16.2427M16.2427 16.2426L7.75739 7.75732" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="itemPrice" :ui="{ default: { class: 'px-0' } }">
						<template #price>
							<div class="flex flex-col gap-4">
								<URange size="md" :min="0" :max="100" :model-value="100" />
								<div class="flex gap-4">
									<UInput size="lg" :ui="{ rounded: 'rounded-lg', padding: { lg: 'px-4' }, color: { white: { outline: 'shadow-none ring-grey-3' } } }">
										<template #leading>
											<span class="text-grey-1 text-sm">от</span>
										</template>
									</UInput>
									<UInput size="lg" :ui="{ rounded: 'rounded-lg', padding: { lg: 'px-4' }, color: { white: { outline: 'shadow-none ring-grey-3' } } }">
										<template #leading>
											<span class="text-grey-1 text-sm">до</span>
										</template>
									</UInput>
								</div>
							</div>
						</template>
					</UAccordion>
				</div>
				<div>
					<TheSeperator class="mb-4" />
					<UAccordion color="white" variant="soft" :items="itemColor" :ui="{ default: { class: 'px-0' } }">
						<template #color>
							<div class="flex flex-col gap-4">
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
						</template>
					</UAccordion>
				</div>
				<div>
					<TheSeperator class="mb-4" />
					<UAccordion color="white" variant="soft" :items="itemTypeMaterial" :ui="{ default: { class: 'px-0' } }">
						<template #material>
							<div class="flex flex-wrap gap-4">
								<UButton size="md" variant="outline" :ui="{ padding: { md: 'px-4 py-2' }, rounded: 'rounded-full', color: { white: { outline: 'ring-grey-0' } } }"> Эко-кожа </UButton>
								<UButton size="md" variant="outline" color="gray" :ui="{ padding: { md: 'px-4 py-2' }, rounded: 'rounded-full' }"> Сетка </UButton>
							</div>
						</template>
					</UAccordion>
				</div>
				<div>
					<TheSeperator class="mb-4" />

					<UAccordion color="white" variant="soft" :items="itemHousingMaterial" :ui="{ default: { class: 'px-0' } }">
						<template #Hmaterial>
							<div class="flex flex-wrap gap-4">
								<UButton size="md" variant="outline" :ui="{ padding: { md: 'px-4 py-2' }, rounded: 'rounded-full', color: { white: { outline: 'ring-grey-0' } } }"> ДСП </UButton>
								<UButton size="md" variant="outline" color="gray" :ui="{ padding: { md: 'px-4 py-2' }, rounded: 'rounded-full' }"> МДФ </UButton>
							</div>
						</template>
					</UAccordion>
				</div>
				<UButton size="xl" :ui="{ padding: { xl: 'p-4 sm:px-6 sm:py-4' } }" class="justify-center rounded-full"> Применить (337 товаров)</UButton>
			</div>
		</UModal>
	</main>
</template>
<script setup>
import { useCategories } from '~/stores/categories';

const route = useRoute();
await useAsyncData('category', () => useCategories().getCategory(route.params.category, route.query));
const { category } = storeToRefs(useCategories());

watch([() => route.params.category, () => route.query], ([category, query]) => {
	useCategories().getCategory(category, query);
});

const sortedModal = ref(false);

const sortingAttributes = [
	{
		label: 'Популярности',
		id: 'popular'
	},
	{
		label: 'Подешевле',
		id: 'cheap_first'
	},
	{
		label: 'Подороже',
		id: 'expensive_first'
	},
	{
		label: 'Высокий рейтинг',
		id: 'high_rating'
	},
	{
		label: 'Добавлено недавно',
		id: 'new'
	}
];

const itemPrice = [
	{
		label: 'Цена',
		defaultOpen: true,
		slot: 'price'
	}
];
const itemColor = [
	{
		label: 'Цвет',
		defaultOpen: true,
		slot: 'color'
	}
];
const itemTypeMaterial = [
	{
		label: 'Тип материала',
		defaultOpen: true,
		slot: 'material'
	}
];
const itemHousingMaterial = [
	{
		label: 'Материал корпуса',
		defaultOpen: true,
		slot: 'Hmaterial'
	}
];

// checkbox attr
const attributes = ref({});
route.query.attributes?.split(',').forEach((attr) => {
	if (attr) attributes.value[attr] = true;
});
const addAttribute = (id) => {
	if (route.query?.attributes && route.query.attributes.split(',').includes(`${id}`)) {
		navigateTo({
			query: {
				...route.query,
				attributes: `${route.query.attributes.split(',').filter((item) => item != id)}`
			}
		});
	} else {
		navigateTo({
			query: {
				...route.query,
				attributes: route.query.attributes ? `${route.query.attributes},${id}` : `${id}`
			}
		});
	}
};

// swiper Options
const categorySwiper = ref(null);
function onSwiper(swiper) {
	categorySwiper.value = swiper;
}

// Sorting
const sorted = ref(sortingAttributes.find((el) => el.id == route.query.sort) || sortingAttributes[0]);

// Color Filter
const colorsCategory = computed(() => category.value.attributes?.find((attr) => attr.name === 'Цвет' || attr.name === 'Color' || attr.name === 'Rangi'));

const clearColors = () => {
	navigateTo({
		query: {
			...route.query,
			attributes: ''
		}
	});
};

// watchers
watch(sorted, (newVal) => {
	navigateTo({
		query: {
			...route.query,
			sort: newVal.id
		}
	});
});
</script>
<style></style>
