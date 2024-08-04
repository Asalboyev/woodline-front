<template>
	<main>
		<div class="wrapper py-20 space-y-20 relative">
			<section class="hidden sm:grid grid-cols-1 gap-6 xl:grid-cols-5">
				<div class="xl:col-span-3 space-y-10">
					<div class="hidden sm:flex flex-row gap-10 h-[600px]">
						<Swiper
							@swiper="setFirstSwiper"
							@slideChange="firstSlideChanged"
							:modules="[SwiperMousewheel]"
							:mousewheel="true"
							direction="vertical"
							:slides-per-view="6"
							class="active:cursor-grabbing !mx-0 w-20"
						>
							<SwiperSlide @click="firstSlideClicked(idx)" v-for="(image, idx) in product.product.images" :key="image.id">
								<div
									:class="idx === activeIndex ? 'border-green' : 'border-grey-product'"
									class="h-20 w-20 cursor-pointer active:cursor-grabbing border duration-200 bg-white rounded-[4px] overflow-hidden"
								>
									<img class="h-full w-full object-contain" :src="image.lg_img || `/assets/images/png/product.png`" :alt="product.product.name" />
								</div>
							</SwiperSlide>
						</Swiper>
						<div class="bg-grey rounded-2xl p-2.5 max-w-[calc(100%-120px)]">
							<Swiper @swiper="setSecondSwiper" @slideChange="secondSlideChanged" :modules="[SwiperMousewheel]" :mousewheel="true" :slides-per-view="1">
								<SwiperSlide v-for="image in product.product.images" :key="image.id">
									<div class="w-full h-[600px]">
										<img class="h-full w-full object-contain" :src="image.lg_img || `/assets/images/png/product.png`" :alt="product.product.name" />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div v-if="false" class="sm:hidden flex flex-col gap-4">
						<div class="bg-grey rounded-2xl p-2.5 w-full">
							<Swiper @swiper="setSecondSwiper" @slideChange="secondSlideChanged" :modules="[SwiperMousewheel]" :mousewheel="true" :slides-per-view="1">
								<SwiperSlide v-for="slide in 12" :key="slide">
									<div class="w-full h-full">
										<img class="h-full w-full object-contain" src="~/assets/images/png/desk.png" alt="chair" />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<Swiper
							@swiper="setFirstSwiper"
							@slideChange="firstSlideChanged"
							:modules="[SwiperMousewheel]"
							:mousewheel="true"
							direction="horizontal"
							:slides-per-view="4"
							class="active:cursor-grabbing w-full"
						>
							<SwiperSlide @click="firstSlideClicked(slide - 1)" v-for="slide in 12" :key="slide">
								<div
									:class="slide === activeIndex + 1 ? 'border-green' : 'border-grey-product'"
									class="h-20 w-20 cursor-pointer active:cursor-grabbing border duration-200 bg-white rounded-[4px] overflow-hidden"
								>
									<img class="h-full w-full object-contain" src="~/assets/images/png/chair.png" alt="chair" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div class="hidden xl:block space-y-6">
						<div class="flex gap-4 flex-wrap">
							<UButton
								@click="tabToggle(idx)"
								v-for="(tab, idx) in tabs"
								:key="idx"
								:class="tab.isActive ? 'text-green' : 'text-grey-2/[.64]'"
								class="justify-center hover:bg-white"
								size="xl"
								variant="outline"
								:ui="{
									padding: { xl: 'px-8 py-3' },
									rounded: 'rounded-full',
									color: {
										white: {
											outline: tab.isActive ? 'ring-green' : 'ring-grey-0'
										}
									}
								}"
								:label="tab.title"
							/>
						</div>
						<!-- {{ product.product.characteristic_options[0] }} -->

						<transition name="fade" mode="out-in">
							<div v-if="tabs[0].isActive">
								<div v-html="product.product.info.desc" class="text-grey-2/[.64]"></div>
							</div>
							<div v-else-if="tabs[1].isActive" class="space-y-6 pr-20">
								<div v-for="item in 3" :key="item" class="space-y-5">
									<h3 class="font-medium text-xl">Основные характеристики</h3>
									<ul class="w-full grid grid-cols-2 gap-x-[128px] gap-y-6">
										<li v-for="i in 9" :key="i" class="text-sm flex items-center gap-2">
											<span class="text-grey-4 text-nowrap">Бренд:</span><span class="w-full mt-0 border-b border-grey-3 border-dashed"></span><span class="text-nowrap">Xiaomi</span>
										</li>
									</ul>
								</div>
							</div>
							<div v-else>
								<div v-for="item in 4" :key="item" class="border-b border-grey-0 py-8 first:pt-0 last:pb-0 last:border-0">
									<div class="flex justify-between items-center">
										<h4 class="font-medium">Shaxram G’iyosov</h4>
										<p class="text-grey-2/[.64]">16 октября 2022 г.</p>
									</div>
									<div class="flex items-center mt-2 gap-8">
										<TheRate disabled :default-value="3" />
									</div>
									<p class="text-grey-2/[.64] mt-4">
										Очень крутой кресло, качество на высшем уровне. Рекомендую другим. Очень крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой кресло, качество на высшем уровне.
										Рекомендую другим.Очень крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой кресло, качество на высшем уровне. Рекомендую другим.
									</p>
								</div>
							</div>
						</transition>
					</div>
				</div>
				<div class="xl:col-span-2 space-y-6">
					<div class="space-y-4">
						<div class="flex gap-4">
							<UButton @click="favoriteStore.toggleFavorite(product.product.slug)" size="lg" color="grey" class="bg-grey" :ui="{ rounded: 'rounded-full' }">
								<template #leading>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											class="duration-200"
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 5.52422L12.765 4.70229C14.8777 2.43257 18.3029 2.43257 20.4155 4.70229C22.5282 6.972 22.5282 10.6519 20.4155 12.9217L13.5301 20.3191C12.685 21.227 11.3149 21.227 10.4699 20.3191L3.58447 12.9217C1.47184 10.6519 1.47184 6.972 3.58447 4.70229C5.69709 2.43257 9.12233 2.43257 11.235 4.70229L12 5.52422ZM17 5.25C16.5858 5.25 16.25 5.58579 16.25 6C16.25 6.41421 16.5858 6.75 17 6.75C17.6904 6.75 18.25 7.30964 18.25 8C18.25 8.41421 18.5858 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8C19.75 6.48122 18.5188 5.25 17 5.25Z"
											:fill="favorites.includes(product.product.slug) ? '#EB5757' : 'transparent'"
											:stroke="favorites.includes(product.product.slug) ? 'transparent' : '#5D5D5F'"
										/>
									</svg>
								</template>
							</UButton>
							<UButton @click="compareStore.toggleCompare(product.product.slug)" size="lg" color="grey" class="bg-grey" :ui="{ rounded: 'rounded-full' }">
								<template #leading>
									<svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											class="duration-200"
											d="M15.5 5L18.5 8M18.5 8L15.5 11M18.5 8L6.5 8"
											:stroke="compares.includes(product.product.slug) ? '#089e5f' : '#5D5D5F'"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="duration-200"
											d="M9.5 19L6.5 16M6.5 16L9.5 13M6.5 16L18.5 16"
											:stroke="compares.includes(product.product.slug) ? '#089e5f' : '#5D5D5F'"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</template>
							</UButton>
						</div>
						<div class="space-y-1">
							<h1 class="text-3xl font-medium">{{ product.product.name }}</h1>
							<p class="text-grey-2/[.64]">
								Код товар: <span>{{ product.product.slug }}</span>
							</p>
						</div>
					</div>
					<div class="space-y-8">
						<div v-for="attribute in product.attributes.filter((attr) => attr.title === 'Color' || attr.title === 'Цвет' || attr.title === 'Rangi')" class="space-y-3">
							<p class="text-grey-2/[.64]">{{ attribute.title }}:</p>
							<div class="flex gap-4">
								<button
									@click="navigateTo(option.available ? localePath(`/product/${option.slug}`) : '')"
									v-for="option in attribute.options"
									:key="option.id"
									:style="{ backgroundColor: option.title, '--tw-ring-color': !option.active ? '#C2C2C3' : checkIfNotWhite(option.title) ? option.title : '#089e5f' }"
									class="w-10 h-10 rounded-full ring-offset-[3px] ring-1 overflow-hidden relative"
								>
									<span
										:class="[option.available ? 'hidden' : 'block', checkIfNotWhite(option.title) ? 'border-white' : 'border-[#C2C2C3]']"
										class="absolute w-full h-full border-t left-0 top-0 -translate-x-[14px] translate-y-[13px] rotate-45"
									></span>
								</button>
							</div>
						</div>
						<div v-for="attribute in product.attributes.filter((attr) => attr.title !== 'Color' && attr.title !== 'Цвет' && attr.title !== 'Rangi')" class="space-y-3">
							<p class="text-grey-2/[.64]">{{ attribute.title }}:</p>
							<div class="flex gap-3">
								<button
									@click="navigateTo(option.available ? localePath(`/product/${option.slug}`) : '')"
									v-for="option in attribute.options"
									:key="option.id"
									:class="option.active ? 'ring-green' : 'ring-grey-0'"
									class="w-10 h-10 flex items-center justify-center rounded-[4px] ring-1 bg-white"
								>
									{{ option.title }}
								</button>
							</div>
						</div>
						<div class="space-y-3">
							<p class="text-grey-2/[.64]">Количество:</p>
							<div class="flex items-center gap-5">
								<div class="border border-grey-0 w-fit rounded-full gap-2 flex px-4 py-2">
									<button @click="count--" class="w-6 h-6 flex items-center justify-center cursor-pointer">
										<UIcon name="i-heroicons-minus" />
									</button>
									<p class="w-6 h-6 text-lg font-ttfirs flex items-center justify-center">
										{{ count }}
									</p>
									<button @click="count++" class="w-6 h-6 flex items-center justify-center cursor-pointer">
										<UIcon name="i-heroicons-plus" />
									</button>
								</div>
								<p class="text-grey-2/[.64]">Осталось всего {{ product.product.stock }}</p>
							</div>
						</div>
					</div>
					<div class="space-y-6 px-8 py-6 rounded-2xl border border-grey-0">
						<h3 class="font-medium text-2xl flex items-center gap-4">
							{{ product.product.real_price }} сум
							<span v-if="product.product.discount_price" class="text-grey-1/[.40] line-through font-normal text-base">{{ product.product.discount_price }}</span>
						</h3>
						<div class="flex flex-wrap items-center gap-4 w-full">
							<UButton @click="cartStore.addCart(product.product.slug)" class="justify-center" size="xl" variant="solid" :ui="{ padding: { xl: 'px-4 py-3' }, rounded: 'rounded-full' }">
								<template #leading>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
											stroke="white"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" stroke="white" stroke-width="1.5" />
										<path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" stroke="white" stroke-width="1.5" />
										<path d="M11 8.5H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M11 12.5H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</template>
								Добавить в корзину
							</UButton>
							<UButton
								class="text-green justify-center"
								size="xl"
								variant="outline"
								:ui="{
									padding: { xl: 'px-4 py-3' },
									rounded: 'rounded-full',
									color: { white: { outline: 'ring-grey-0' } }
								}"
							>
								Купить в один клик</UButton
							>
						</div>
					</div>
					<div class="rounded-3xl overflow-hidden">
						<ULink to="/" class="block w-full">
							<img class="w-full" src="~/assets/images/png/home-banner-3.png" alt="product banner" />
						</ULink>
					</div>
				</div>
			</section>
			<section v-if="false" class="sm:hidden flex flex-col gap-6">
				<div class="flex flex-col gap-6">
					<div class="bg-grey rounded-2xl p-2.5">
						<Swiper @swiper="setSecondSwiper" @slideChange="secondSlideChanged" :modules="[SwiperMousewheel]" :mousewheel="true" :slides-per-view="1">
							<SwiperSlide v-for="slide in 12" :key="slide">
								<img class="h-full w-full object-contain" src="~/assets/images/png/desk.png" alt="chair" />
							</SwiperSlide>
						</Swiper>
					</div>
					<Swiper
						@swiper="setFirstSwiper"
						@slideChange="firstSlideChanged"
						:modules="[SwiperMousewheel]"
						:mousewheel="true"
						direction="horizontal"
						:slides-per-view="4"
						class="active:cursor-grabbing w-full"
					>
						<SwiperSlide @click="firstSlideClicked(slide - 1)" v-for="slide in 12" :key="slide">
							<div
								:class="slide === activeIndex + 1 ? 'border-green' : 'border-grey-product'"
								class="h-20 w-20 cursor-pointer active:cursor-grabbing border duration-200 bg-white rounded-2xl overflow-hidden"
							>
								<img class="h-full w-full object-contain" src="~/assets/images/png/chair.png" alt="chair" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-grey-2/[.64] text-xs">Код товар: <span>A58-X</span></p>
					<h3 class="text-lg font-medium">Спортивное кресло Evolution VIOLANT</h3>
				</div>
				<div class="flex items-center gap-4">
					<h3 class="font-medium text-xl">17 650 000 сум</h3>
					<span class="text-grey-1 line-through font-normal text-base">20 200 000</span>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="items" :ui="{ default: { class: 'px-0' } }">
						<template #color>
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
						</template>
					</UAccordion>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="itemsSize" :ui="{ default: { class: 'px-0' } }">
						<template #size>
							<div class="flex flex-wrap gap-3">
								<button variant="outline" class="w-11 h-11 flex items-center justify-center rounded-[4px] ring-1 ring-grey-0">S</button>
								<button variant="outline" class="w-11 h-11 flex items-center justify-center rounded-[4px] ring-1 ring-grey-0">M</button>
								<button variant="outline" class="w-11 h-11 flex items-center justify-center rounded-[4px] ring-1 ring-green">L</button>
								<button variant="outline" class="w-11 h-11 flex items-center justify-center rounded-[4px] ring-1 ring-grey-0">XL</button>
							</div>
						</template>
					</UAccordion>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="itemsSpecifications" :ui="{ default: { class: 'px-0' } }">
						<template #specifications>
							<div class="flex flex-col gap-4">
								<div class="flex gap-2">
									<span class="text-grey-2">Производитель:</span>
									<div class="flex-1 border-b text-grey-0"></div>
									<span class="text-black">Cougar</span>
								</div>
								<div class="flex gap-2">
									<span class="text-grey-2">Модель:</span>
									<div class="flex-1 border-b text-grey-0"></div>
									<span class="text-black">6206A-2</span>
								</div>
							</div>
						</template>
					</UAccordion>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="itemsDescription" :ui="{ default: { class: 'px-0' } }">
						<template #description>
							<p class="text-grey-2 text-sm">
								Геймерские кресла 6206A-2 выполнено в сочетание фиолетового и черного. Модель выглядит элегантно и лаконично, поэтому она подойдет как в современный офис, так и в более консервативные
								заведения. Полозья выполнены из крепкого металла, при этом они разбираются, что очень удобно при сборке. Для более удобного долгого сидения сделаны широкие подлокотники из прочного
								пластика. Геймерские кресла 6206A-2 соответствует американскому стандарту Cougar, который создан компетентным техническим комитетом. Обивка выполнена из нескольких материалов - сидение
								сделано из дышащей ткани черного цвета для комфортного нахождения в кресле, а спинка из воздухопроницаемой сетки того же оттенка. Нагрузка на модель не может превышать 120 кг.
							</p>
						</template>
					</UAccordion>
				</div>
				<div>
					<UAccordion color="white" variant="soft" :items="itemsReviews" :ui="{ default: { class: 'px-0' } }">
						<template #reviews>
							<div class="flex flex-col gap-4">
								<div class="flex flex-col gap-4" v-for="(item, i) in 5" :key="i">
									<div class="flex flex-col gap-2">
										<div class="flex items-center justify-between gap-4">
											<span class="flex-1 text-black">Shaxrah g’iyosov</span>
											<span class="text-grey-2">16 октября 2022 г.</span>
										</div>
										<TheRate disabled />
									</div>
									<p>
										Shaxrah g’iyosov 16 октября 2022 г. Очень крутой кресло, качество на высшем уровне. Рекомендую другим. Очень крутой кресло, качество на высшем уровне. Рекомендую другим.Очень
										крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой кресло, качество на высшем уровне.
										Рекомендую другим.
									</p>
									<TheSeperator />
								</div>
							</div>
						</template>
					</UAccordion>
				</div>
			</section>
			<section>
				<h3 class="text-3xl font-medium">{{ data.showcases[0].name }}</h3>
				<div class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					<TheCard v-for="product in data.showcases[0].products.slice(0, 8)" :key="product.id" :data="product" />
				</div>
			</section>
		</div>
		<!-- product-id-bottom  -->
		<div class="sm:hidden block sticky z-[10] border border-grey-0 bg-white rounded-tr-2xl rounded-tl-2xl p-4 transition-all duration-300" :class="isScrolled ? 'bottom-0' : 'bottom-16'">
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between gap-4">
					<span class="text-base text-black">17 650 000 сум</span>
				</div>
				<div class="flex flex-wrap items-center justify-between gap-4">
					<UButton class="flex justify-center" size="lg" :ui="{ rounded: 'rounded-full', padding: { lg: 'px-6 py-3' } }"> В корзину</UButton>
					<UButton class="flex justify-center" size="lg" variant="outline" :ui="{ rounded: 'rounded-full', padding: { lg: 'px-6 py-3' } }">Купить в один клик</UButton>
				</div>
			</div>
		</div>
	</main>
</template>
<script setup>
import { useProducts } from '~/stores/products';
import { useShowcases } from '~/stores/showcases';
import { useFavoritesStore } from '~/stores/favorite';
import { useCompareStore } from '~/stores/compare';
import { useCartStore } from '~/stores/cart';

const favoriteStore = useFavoritesStore();
const compareStore = useCompareStore();
const cartStore = useCartStore();

const { favorites } = storeToRefs(useFavoritesStore());
const { compares } = storeToRefs(useCompareStore());
const { carts } = storeToRefs(useCartStore());

const localePath = useLocalePath();
const route = useRoute();

const { data } = await useAsyncData('product', async () => {
	let { showcases } = await useShowcases().getShowcases();
	await useProducts().getProduct(route.params.id);
	return {
		showcases
	};
});

const { product } = storeToRefs(useProducts());

// counter of stock
const count = ref(0);

watch(count, (val) => {
	if (val < 0) count.value = 0;
	if (val > product.value.product.stock) {
		count.value = product.value.product.stock;
	}
});

// color check

function checkIfNotWhite(hex) {
	const hexCode = hex.charAt(0) === '#' ? hex.substr(1, 6) : hex;

	const hexR = parseInt(hexCode.substr(0, 2), 16);
	const hexG = parseInt(hexCode.substr(2, 2), 16);
	const hexB = parseInt(hexCode.substr(4, 2), 16);
	// Gets the average value of the colors
	const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

	return contrastRatio >= 0.5 ? false : true;
}

// tabs
const tabs = ref([
	{ title: 'Описание товара', isActive: true },
	{ title: 'Характеристики', isActive: false },
	{ title: `Отзывы (${product.value.product.info.comments.length})`, isActive: false }
]);

// accordion
const items = [
	{
		label: ' Выберите цвет ',
		defaultOpen: true,
		slot: 'color'
	}
];
const itemsSize = [
	{
		label: 'Размер',
		defaultOpen: true,
		slot: 'size'
	}
];
const itemsSpecifications = [
	{
		label: 'Xарактеристики',
		defaultOpen: true,
		slot: 'specifications'
	}
];
const itemsDescription = [
	{
		label: 'Описание товара',
		defaultOpen: true,
		slot: 'description'
	}
];
const itemsReviews = [
	{
		label: 'Отзывы',
		defaultOpen: true,
		slot: 'reviews'
	}
];

const tabToggle = (index) => {
	tabs.value.forEach((tab, idx) => {
		tab.isActive = idx === index;
	});
};

const isScrolled = ref(false);

let lastScrollY = window?.scrollY || 0;

const handleScroll = () => {
	const currentScrollY = window?.scrollY || 0;
	if (currentScrollY >= lastScrollY) {
		isScrolled.value = true;
	} else {
		isScrolled.value = false;
	}
	lastScrollY = currentScrollY;
};

// swiper settings
const activeIndex = ref(0);
const firstSwiper = ref(null);
const secondSwiper = ref(null);
const setFirstSwiper = (swiper) => {
	firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
	secondSwiper.value = swiper;
};

const firstSlideChanged = (swiper) => {
	secondSwiper.value.slideTo(swiper.activeIndex);
	activeIndex.value = swiper.activeIndex;
};

const secondSlideChanged = (swiper) => {
	firstSwiper.value.slideTo(swiper.activeIndex);
	activeIndex.value = swiper.activeIndex;
};

const firstSlideClicked = (index) => {
	firstSwiper.value.slideTo(index);
	secondSwiper.value.slideTo(index);
	activeIndex.value = index;
};

onMounted(() => {
	if (process.client) {
		window.addEventListener('scroll', handleScroll);
	}
});

onUnmounted(() => {
	if (process.client) {
		window.removeEventListener('scroll', handleScroll);
	}
});
</script>
<style></style>
