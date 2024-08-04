<template>
	<main>
		<div class="wrapper py-20 space-y-20">
			<section class="space-y-10">
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 relative items-start">
					<div class="lg:col-span-3 hidden lg:flex flex-col gap-8 sticky top-36">
						<h2 class="text-2xl font-bold tracking-wide">Kategoriyalar</h2>
						<ul class="space-y-4">
							<li v-for="promotion in promotions.promotions.data" :key="promotion.id">
								<NuxtLink :to="`/promotions/${promotion.slug}`" class="text-sm text-gray-600 hover:text-gray-900" :class="{ 'text-primary': route.params.slug === promotion.slug }">
									{{ promotion.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="lg:col-span-9 flex flex-col gap-10">
						<div class="grid gap-6 grid-cols-2 md:grid-cols-3 sm:gap-x-4 sm:gap-8-10">
							<TheCard v-for="(product, i) in products.promotion.products" :data="product" :key="i" />
						</div>
					</div>
				</div>
			</section>
			<section class="space-y-10"></section>
		</div>
	</main>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { usePromotions } from '~/stores/promotions.js';

const route = useRoute();

const promotionsStore = usePromotions();

const { getPromotions, getPromotionsCategoryProducts } = promotionsStore;

const { data: products } = await useAsyncData(
	'products',
	async () => {
		return await getPromotionsCategoryProducts(route.params.slug);
	},
	{ watch: [() => route.params.slug] }
);
const { data: promotions } = await useAsyncData('promotions', async () => {
	return await getPromotions();
});
</script>
