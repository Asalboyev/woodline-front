<template>
	<figure class="flex flex-col gap-y-4">
		<UModal v-model="isProductModalOpen" :ui="{ base: 'sm:!max-w-[960px]' }">
			<div class="w-full p-4 sm:p-8 space-y-6">
				<div class="flex items-center justify-between">
					<h3 class="text-xl font-medium">{{ product?.name }}</h3>
					<UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isProductModalOpen = false" />
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<Swiper @swiper="setSecondModalSwiper" @slideChange="secondSlideModalChanged" :modules="[SwiperMousewheel]" :mousewheel="true" :slides-per-view="1">
							<SwiperSlide v-for="image in data?.images" :key="image.id">
								<div class="p-4 overflow-hidden rounded-2xl border border-grey-0 w-full md:h-[440px]">
									<img :src="data && data?.images && image ? image?.lg_img : '/assets/images/png/product.jpg'" class="h-full w-full object-contain" :alt="data?.for_search" />
								</div>
							</SwiperSlide>
						</Swiper>
						<Swiper @swiper="setFirstModalSwiper" @slideChange="firstSlideModalChanged" :slides-per-view="4" class="active:cursor-grabbing !mx-0">
							<SwiperSlide @click="firstSlideModalClicked(idx)" v-for="(image, idx) in data?.images" :key="image.id">
								<div
									:class="idx === activeIndexModal ? 'border-green' : 'border-grey-0'"
									class="h-20 w-20 cursor-pointer active:cursor-grabbing border duration-200 bg-white rounded-2xl overflow-hidden"
								>
									<img class="h-full w-full object-contain" :src="image?.lg_img || `/assets/images/png/product.png`" :alt="data?.for_search" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div class="space-y-6">
						<div class="flex justify-between rounb items-center">
							<p class="text-grey-2/[.64]">
								Код товар: <span>{{ product?.id }}</span>
							</p>
							<div class="flex gap-4 items-start">
								<UButton @click="favoriteStore.toggleFavorite(data?.slug)" size="lg" color="grey" class="bg-grey" :ui="{ rounded: 'rounded-full' }">
									<template #leading>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												class="duration-200"
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M12 5.52422L12.765 4.70229C14.8777 2.43257 18.3029 2.43257 20.4155 4.70229C22.5282 6.972 22.5282 10.6519 20.4155 12.9217L13.5301 20.3191C12.685 21.227 11.3149 21.227 10.4699 20.3191L3.58447 12.9217C1.47184 10.6519 1.47184 6.972 3.58447 4.70229C5.69709 2.43257 9.12233 2.43257 11.235 4.70229L12 5.52422ZM17 5.25C16.5858 5.25 16.25 5.58579 16.25 6C16.25 6.41421 16.5858 6.75 17 6.75C17.6904 6.75 18.25 7.30964 18.25 8C18.25 8.41421 18.5858 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8C19.75 6.48122 18.5188 5.25 17 5.25Z"
												:fill="favorites.includes(data?.slug) ? '#EB5757' : 'transparent'"
												:stroke="favorites.includes(data?.slug) ? 'transparent' : '#5D5D5F'"
											/>
										</svg>
									</template>
								</UButton>
								<UButton @click="compareStore.toggleCompare(data?.slug)" size="lg" color="grey" class="bg-grey" :ui="{ rounded: 'rounded-full' }">
									<template #leading>
										<svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												class="duration-200"
												d="M15.5 5L18.5 8M18.5 8L15.5 11M18.5 8L6.5 8"
												:stroke="compares.includes(data?.slug) ? '#089e5f' : '#5D5D5F'"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												class="duration-200"
												d="M9.5 19L6.5 16M6.5 16L9.5 13M6.5 16L18.5 16"
												:stroke="compares.includes(data?.slug) ? '#089e5f' : '#5D5D5F'"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</template>
								</UButton>
							</div>
						</div>
						<div class="space-y-6 sm:px-8 sm:py-6 p-3 rounded-2xl border border-grey-0">
							<h3 class="font-medium text-2xl flex items-center gap-4">
								{{ formatNumber(product?.real_price) }} сум
								<span v-if="product?.discount_price" class="text-grey-1/[.40] line-through font-normal text-base">{{ formatNumber(product?.discount_price) }}</span>
							</h3>
							<div class="space-y-4">
								<UButton @click="toggleCart(data)" block size="xl" variant="solid" :ui="{ padding: { xl: 'py-3 px-2 sm:px-4 sm:py-4' }, rounded: 'rounded-full' }">
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
									block
									class="text-green"
									size="xl"
									variant="outline"
									:ui="{ padding: { xl: 'py-3 px-2 sm:px-4 sm:py-4' }, rounded: 'rounded-full', color: { white: { outline: 'ring-grey-0' } } }"
								>
									Купить в один клик
								</UButton>
							</div>
						</div>
						<ul class="w-full space-y-4">
							<li v-for="(item, i) in product?.characteristic_options" :key="i" class="text-sm flex items-center gap-2">
								<span class="text-grey-4 text-nowrap">{{ item?.characteristic?.name }}: </span>
								<span class="w-full mt-0 border-b border-grey-3 border-dashed"> </span>
								<span class="text-nowrap">
									{{ item.name }}
								</span>
							</li>
						</ul>
						<ULink :to="localePath(`/product/${data?.slug}`)" class="flex gap-2 items-center text-green hover:text-green-400 duration-200">
							Подробнее о товаре
							<UIcon name="i-heroicons-arrow-right" />
						</ULink>
					</div>
				</div>
			</div>
		</UModal>
		<div class="flex items-center justify-center border border-grey-0 group rounded-2xl duration-200 overflow-hidden hover:shadow-lg p-3 h-[190px] sm:h-[360px] relative">
			<div class="absolute z-[5] right-3 top-3 sm:right-4 sm:top-4 flex gap-2 sm:gap-x-4">
				<button @click="favoriteStore.toggleFavorite(data?.slug)">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							class="duration-200"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 5.52422L12.765 4.70229C14.8777 2.43257 18.3029 2.43257 20.4155 4.70229C22.5282 6.972 22.5282 10.6519 20.4155 12.9217L13.5301 20.3191C12.685 21.227 11.3149 21.227 10.4699 20.3191L3.58447 12.9217C1.47184 10.6519 1.47184 6.972 3.58447 4.70229C5.69709 2.43257 9.12233 2.43257 11.235 4.70229L12 5.52422ZM17 5.25C16.5858 5.25 16.25 5.58579 16.25 6C16.25 6.41421 16.5858 6.75 17 6.75C17.6904 6.75 18.25 7.30964 18.25 8C18.25 8.41421 18.5858 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8C19.75 6.48122 18.5188 5.25 17 5.25Z"
							:fill="favorites.includes(data?.slug) ? '#EB5757' : 'transparent'"
							:stroke="favorites.includes(data?.slug) ? 'transparent' : '#5D5D5F'"
						/>
					</svg>
				</button>
				<button @click="compareStore.toggleCompare(data?.slug)">
					<svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							class="duration-200"
							d="M15.5 5L18.5 8M18.5 8L15.5 11M18.5 8L6.5 8"
							:stroke="compares.includes(data?.slug) ? '#089e5f' : '#5D5D5F'"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							class="duration-200"
							d="M9.5 19L6.5 16M6.5 16L9.5 13M6.5 16L18.5 16"
							:stroke="compares.includes(data?.slug) ? '#089e5f' : '#5D5D5F'"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div
				class="absolute translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 top-0 left-0 w-full h-full bg-[rgba(2,1,5,0.08)] backdrop-blur-sm flex items-center justify-center"
			>
				<UButton
					size="xl"
					@click="getProductId(data.slug)"
					:ui="{ padding: { xl: 'sm:px-6 sm:py-4 p-3' }, rounded: 'rounded-xl' }"
					class="text-sm tracking-wide bg-[rgb(255,255,255,0.8)] hover:bg-[rgb(255,255,255,0.9)] border-2 border-white text-black"
					variant="soft"
					label="Быстрый просмотр"
				>
				</UButton>
			</div>
			<img :src="data && data?.images ? data?.images[0]?.lg_img : '/assets/images/png/product.jpg'" class="h-full w-full object-cover" :alt="data?.name" />
			<!-- <img :src="data?.images[0]?.lg_img || `/assets/images/png/product.png`" class="w-full h-full object-contain" :alt="data?.name" /> -->
		</div>
		<div class="flex justify-between flex-1 gap-1 items-start">
			<div class="flex flex-col gap-y-2 h-full">
				<figcaption>
					<ULink :to="localePath(`/product/${data?.slug}`)" class="line-clamp-2 font-medium text-sm sm:text-base hover:text-green duration-200">{{ data?.name }} </ULink>
				</figcaption>
				<div class="flex sm:items-center flex-col sm:flex-row mt-auto gap-[2px] sm:gap-2">
					<p class="text-green font-medium text-sm sm:text-lg">{{ formatNumber(data?.real_price) }} сум</p>
					<span v-if="data?.discount_price" class="text-grey-1 text-xs sm:text-base font-normal line-through">{{ formatNumber(data?.discount_price) }}</span>
				</div>
			</div>
			<UButton @click="toggleCart(data)" size="md" :ui="{ padding: { md: 'p-1' }, rounded: 'rounded-lg' }" variant="soft">
				<template #leading>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M20.6665 13L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H12.9999"
							stroke="#089E5F"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M19 15L19 21" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M22 18L16 18" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M16 19L17.7528 20.4023C18.1707 20.7366 18.7777 20.6826 19.1301 20.2799L22 17" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</template>
			</UButton>
		</div>
	</figure>
</template>
<script setup>
import { formatNumber } from '~/utils/numberFormatter';
import { useFavoritesStore } from '~/stores/favorite';
import { useProducts } from '~/stores/products';
import { useCompareStore } from '~/stores/compare';
import { useCartStore } from '~/stores/cart';

const localePath = useLocalePath();

const favoriteStore = useFavoritesStore();
const compareStore = useCompareStore();
const cartStore = useCartStore();
const productsStore = useProducts();

const { favorites } = storeToRefs(useFavoritesStore());
const { compares } = storeToRefs(useCompareStore());
const { toggleCart } = cartStore;
const { getProductBySlug } = productsStore;

const { product, loading } = storeToRefs(productsStore);

const props = defineProps({
	data: {
		type: Object
	}
});

// product modal
const isProductModalOpen = ref(false);

// swiper settings
const activeIndexModal = ref(0);
const firstSwiperModal = ref(null);
const secondSwiperModal = ref(null);

const setFirstModalSwiper = (swiper) => {
	firstSwiperModal.value = swiper;
};
const setSecondModalSwiper = (swiper) => {
	secondSwiperModal.value = swiper;
};

const firstSlideModalChanged = (swiper) => {
	secondSwiperModal.value.slideTo(swiper.activeIndex);
	activeIndexModal.value = swiper.activeIndex;
};

const secondSlideModalChanged = (swiper) => {
	firstSwiperModal.value.slideTo(swiper.activeIndex);
	activeIndexModal.value = swiper.activeIndex;
};

const firstSlideModalClicked = (index) => {
	firstSwiperModal.value.slideTo(index);
	secondSwiperModal.value.slideTo(index);
	activeIndexModal.value = index;
};

const getProductId = async (slug) => {
	await getProductBySlug(slug);
	isProductModalOpen.value = true;
};

// shortcuts
defineShortcuts({
	escape: {
		usingInput: true,
		whenever: [isProductModalOpen],
		handler: () => {
			isProductModalOpen.value = false;
		}
	}
});
</script>
<style></style>
