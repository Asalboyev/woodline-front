<template>
	<div class="overflow-x-hidden">
		<main>
			<div class="wrapper py-20 space-y-20">
				<section>
					<div class="flex items-center justify-between mb-6">
						<h3 class="text-lg sm:text-3xl font-medium">Сравнение</h3>
						<UButton
							@click="compareStore.clearCompares()"
							size="xl"
							:ui="{
								padding: { xl: 'px-6 py-3' },
								rounded: 'rounded-full',
								icon: { size: { xl: 'h-5 w-5' } }
							}"
							class="hover:bg-transparent text-grey-header"
							variant="ghost"
							label="Очистить"
						>
							<template #leading>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M19 9L18.2841 18.3068C18.1238 20.3908 16.386 22 14.2959 22H9.70412C7.61398 22 5.87621 20.3908 5.71591 18.3068L5 9M21 7C18.4021 5.73398 15.3137 5 12 5C8.68635 5 5.59792 5.73398 3 7M10 5V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V5M10 11V17M14 11V17"
										stroke="#353437"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
							</template>
						</UButton>
					</div>
					<div class="flex items-stretch relative">
						<div class="wrapper shrink-0 relative z-0">
							<div class="relative">
								<div class="overflow-hidden sm:pr-[150px] sm:-mr-[150px] relative z-0">
									<Swiper
										class="w-full !overflow-visible"
										:space-between="12"
										:breakpoints="{
											0: {
												slidesPerView: 1
											},
											768: {
												slidesPerView: 2.2
											},
											1024: {
												slidesPerView: 3.2
											},
											1280: {
												slidesPerView: 4.2
											}
										}"
									>
										<SwiperSlide v-for="product in data?.products" :key="product.id">
											<div class="flex flex-col gap-8 group">
												<div class="flex flex-col gap-7">
													<div class="border p-3 border-grey-0 rounded-2xl duration-200 overflow-hidden group-hover:shadow-lg h-[360px] relative">
														<button @click="compareStore.removeCompare(product.slug)" class="absolute z-[5] right-4 top-4">
															<img class="cursor-pointer" src="~/assets/images/svg/close.svg" alt="heart" />
														</button>
														<img :src="product.images[0].lg_img || `/assets/images/png/product.png`" class="w-full h-full object-contain" :alt="product.name" />
													</div>
													<div class="flex items-center">
														<div class="flex flex-col gap-2 flex-1">
															<ULink :to="`/product/${product.slug}`" class="font-medium line-clamp-2 hover:text-green duration-200">{{ product.name }}</ULink>
															<p class="text-lg text-green font-medium">{{ formatNumber(product.real_price) }} сум</p>
														</div>
														<UButton @click="cartStore.toggleCart(product?.slug)" size="xl" :ui="{ padding: { xl: 'p-3' }, rounded: 'rounded-lg' }" class="text-base shrink-0" variant="soft">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																<path
																	d="M20.6665 13L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H12.9999"
																	stroke="#089E5F"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
																<path v-if="!carts.includes(product?.slug)" d="M19 15L19 21" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																<path v-if="!carts.includes(product?.slug)" d="M22 18L16 18" stroke="#089E5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																<path
																	v-if="carts.includes(product?.slug)"
																	d="M16 19L17.7528 20.4023C18.1707 20.7366 18.7777 20.6826 19.1301 20.2799L22 17"
																	stroke="#089E5F"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</UButton>
													</div>
												</div>
												<div class="flex flex-col gap-2">
													<div class="flex justify-between items-center" v-for="(characteristic, i) in product?.characteristic_options" :key="i">
														<p class="text-grey-2">{{ characteristic?.characteristic?.name }}</p>
														<p class="text-lg">{{ characteristic?.name }}</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div class="flex items-center justify-between">
						<h3 class="text-base lg:text-2xl xl:text-3xl font-medium">{{ data.showcases[0].name }}</h3>
						<UButton
							size="xl"
							:ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
							class="hover:bg-transparent text-grey-2"
							variant="ghost"
							label="Подробноее"
							trailing-icon="i-heroicons-chevron-double-right"
						>
						</UButton>
					</div>
					<div class="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<TheCard v-for="product in data?.showcases[0].products.slice(0, 8)" :data="product" :key="product.id" />
					</div>
				</section>
			</div>
		</main>
	</div>
</template>

<script setup>
import { formatNumber } from '~/utils/numberFormatter';
import { useCompareStore } from '~/stores/compare';
import { useCartStore } from '~/stores/cart';
import { useProducts } from '~/stores/products';
import { useShowcases } from '~/stores/showcases';

const compareStore = useCompareStore();
const cartStore = useCartStore();

const { compares } = storeToRefs(useCompareStore());
const { carts } = storeToRefs(useCartStore());

const { data } = await useAsyncData('compare', async () => {
	let { showcases } = await useShowcases().getShowcases();
	let products = await fetchProducts();

	return {
		showcases,
		products
	};
});

watch(
	() => compares.value,
	async () => {
		data.value.products = await fetchProducts();
	},
	{ deep: true }
);

async function fetchProducts() {
	return await Promise.all(
		compares.value.map(async (slug) => {
			let product = await useProducts().getProductBySlug(slug);
			return product.product;
		})
	);
}
</script>
