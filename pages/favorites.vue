<template>
	<main>
		<div class="wrapper py-20 space-y-20">
			<section class="space-y-10">
				<div class="flex items-center justify-between">
					<h3 class="text-lg sm:text-3xl font-medium">Избранное</h3>
					<UButton
						@click="favoriteStore.clearFavorites()"
						size="xl"
						:ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
						class="text-base hover:bg-transparent text-grey-2"
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
				<div class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 sm:gap-y-10">
					<TheCard v-for="product in data.products" :data="product" :key="product.id" />
				</div>
			</section>
			<section>
				<TheDescription />
			</section>
		</div>
	</main>
</template>
<script setup>
import { useFavoritesStore } from '~/stores/favorite';
import { useProducts } from '~/stores/products';

const favoriteStore = useFavoritesStore();

const { favorites } = storeToRefs(useFavoritesStore());

const { data } = await useAsyncData('favorites', async () => {
	let products = await fetchProducts();

	return {
		products
	};
});

watch(
	() => favorites.value,
	async () => {
		data.value.products = await fetchProducts();
	},
	{ deep: true }
);

async function fetchProducts() {
	return await Promise.all(
		favorites.value.map(async (slug) => {
			let product = await useProducts().getProductBySlug(slug);
			return product.product;
		})
	);
}
</script>
<style></style>
