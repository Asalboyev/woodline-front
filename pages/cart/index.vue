<template>
	<div>
		<main>
			<div class="wrapper py-20 space-y-20">
				<section class="space-y-10">
					<div class="flex items-center justify-between">
						<h3 class="text-3xl font-medium">Корзина</h3>
					</div>
					<div class="grid gap-6 xl:grid-cols-9">
						<div class="xl:col-span-6">
							<div class="border border-grey-0 rounded-xl p-6 flex flex-col gap-5">
								<div class="flex items-center justify-between">
									<UCheckbox v-model="selected" @change="toggleSelectAll" label="Выбрать для заказа" />
									<p class="text-grey-2">Товаров: 2</p>
								</div>
								<transition-group name="fade" tag="div" class="space-y-5">
									<div class="flex flex-col gap-6 border-b border-grey-0 last:border-0 last:pb-0 pb-5" v-for="product in carts" :key="product.id">
										<div class="flex flex-wrap items-center gap-4">
											<div class="flex items-center gap-2">
												<UCheckbox :disabled="!product.stock" v-model="availableProducts[product.slug]" />
												<div class="w-24 h-24 border border-grey-0 rounded-lg overflow-hidden flex items-center justify-center">
													<img class="h-full w-full object-contain flex-shrink-0" :src="product.images[0].lg_img || `/assets/images/png/product.png`" :alt="product.name" />
												</div>
											</div>
											<div class="flex flex-col gap-4 flex-1">
												<div class="flex items-center justify-between">
													<ULink :to="`/product/${product.slug}`" class="text-xl flex-1 hover:text-green duration-200">{{ product.name }}</ULink>
													<UButton
														@click="removeCart(product)"
														size="xl"
														:ui="{
															padding: { xl: 'p-2' },
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

												<div class="flex items-center justify-between">
													<div class="flex items-center gap-2">
														<span class="text-green text-xl">{{ formatNumber(product.real_price) }} сум</span>
														<span v-if="product.discount_price" class="line-through text-grey-1">{{ formatNumber(product.discount_price) }}</span>
													</div>
													<div class="border border-grey-0 rounded-full flex items-center overflow-hidden py-1 px-4 gap-2">
														<UButton @click="decrement(product)" variant="ghost" class="hover:bg-transparent text-grey-header">
															<template #leading>
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg>
															</template>
														</UButton>
														<div class="w-7 h-7 flex items-center justify-center text-xl">{{ product.quantity }}</div>
														<UButton @click="increment(product)" variant="ghost" class="hover:bg-transparent text-grey-header">
															<template #leading>
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M12 6V18M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg>
															</template>
														</UButton>
													</div>
												</div>
											</div>
										</div>
									</div>
								</transition-group>
							</div>
						</div>
						<div class="xl:col-span-3">
							<div class="sticky top-36">
								<div class="border border-grey-0 rounded-xl flex flex-col gap-6 p-6">
									<div>
										<h3 class="text-xl">Ваш заказ</h3>
										<TheSeperator class="my-6" />
										<div class="flex flex-col gap-6">
											<div class="flex items-center justify-between">
												<p>Товары, {{ carts.length }} шт</p>
												<p>{{ formatNumber(totalPrice) }} сум</p>
											</div>
											<div class="flex items-center justify-between">
												<p>Доставка:</p>
												<p>бесплатно</p>
											</div>
											<div class="flex items-center justify-between">
												<p>Общий:</p>
												<p class="text-xl font-medium">{{ formatNumber(totalPrice) }} сум</p>
											</div>
										</div>
									</div>
									<NuxtLink to="/checkout" class="w-full">
										<UButton
											size="xl"
											:ui="{
												padding: { xl: 'px-6 py-3' },
												rounded: 'rounded-full',
												icon: { size: { xl: 'h-5 w-5' } }
											}"
											class="justify-center w-full"
											label="Перейти к формализации"
										>
										</UButton>
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div class="flex items-center justify-between">
						<h3 class="text-base lg:text-2xl xl:text-3xl font-medium">{{ data?.showcases[0].name }}</h3>
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
					<div class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 sm:gap-y-10">
						<TheCard v-for="product in data?.showcases[0].products.slice(0, 8)" :data="product" :key="product.id" />
					</div>
				</section>
			</div>
		</main>
	</div>
</template>
<script setup>
import { formatNumber } from '~/utils/numberFormatter';
import { useCartStore } from '~/stores/cart';
import { useShowcases } from '~/stores/showcases';

const selected = ref(false);
const availableProducts = ref({});
const cartStore = useCartStore();

const { carts, totalPrice } = storeToRefs(cartStore);
const { removeCart, increment, decrement } = cartStore;

const { data } = await useAsyncData('cart', async () => {
	let { showcases } = await useShowcases().getShowcases();
	return {
		showcases
	};
});
</script>
