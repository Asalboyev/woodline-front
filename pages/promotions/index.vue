<template>
	<main>
		<div class="wrapper py-20 space-y-20">
			<section class="space-y-10">
				<Swiper
					class="mt-10"
					:space-between="12"
					:breakpoints="{
						0: {
							slidesPerView: 2
						},
						640: {
							slidesPerView: 2.2
						},
						768: {
							slidesPerView: 3.2
						},
						1024: {
							slidesPerView: 4.2
						},
						1280: {
							slidesPerView: 6.2
						}
					}"
				>
					<SwiperSlide v-for="(promotion, i) in promotions.promotions.data" :key="i">
						<ULink class="flex flex-col items-center gap-2 group" :to="`/promotions/${promotion.slug}`">
							<div class="h-40 w-40 sm:h-52 sm:w-52 flex items-center justify-center bg-grey">
								<img class="object-contain w-full h-full" :src="promotion && promotion.lg_img ? promotion.lg_img : '/assets/images/png/product.jpg'" />
							</div>
							<p class="text-center font-medium text-[#353437] group-hover:text-green duration-200">
								{{ promotion.name }}
							</p>
						</ULink>
					</SwiperSlide>
				</Swiper>
			</section>
			<section class="space-y-10">
				<div class="flex items-center justify-between">
					<h3 class="text-3xl font-medium">Акции</h3>
					<UButton
						size="xl"
						:ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
						class="text-base hover:bg-transparent text-grey-2"
						variant="ghost"
						label="Подробноее"
						trailing-icon="i-heroicons-chevron-double-right"
					>
					</UButton>
				</div>
				{{ products.products.data[0] }}
				<div class="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<TheCard v-for="(product, i) in products.products.data" :data="product" :key="i" />
				</div>
			</section>
			<section>
				<TheDescription />
			</section>
		</div>
	</main>
</template>
<script setup>
import { usePromotions } from '~/stores/promotions.js';
import { useCategories } from '~/stores/categories.js';
import { useProducts } from '~/stores/products.js';

const promotionsStore = usePromotions();
const categoriesStore = useCategories();
const productsStore = useProducts();

const { getPromotions, getPromotionsProducts } = promotionsStore;
const { getCategories } = categoriesStore;
const { getProduct } = productsStore;

const { data: products } = await useAsyncData('products', async () => {
	return await getPromotionsProducts();
});
const { data: promotions } = await useAsyncData('promotions', async () => {
	return await getPromotions();
});
</script>
