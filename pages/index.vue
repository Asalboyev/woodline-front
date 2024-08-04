<template>
	<div>
		<HomeTheHero />
		<main>
			<div class="wrapper py-20 space-y-20">
				<section>
					<div class="flex flex-wrap items-center justify-between gap-4">
						<h3 class="text-lg md:text-3xl font-medium flex-1">Категория товаров</h3>
						<UButton
							size="xl"
							:to="localePath('/categories')"
							:ui="{ padding: { xl: 'p-1 sm:px-6 sm:py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
							class="text-sm sm:text-base gap-2 text-grey-2 sm:text-white sm:bg-green bg-transparent"
							variant="solid"
							label="Все категории"
							trailing-icon="i-heroicons-chevron-double-right"
						>
						</UButton>
					</div>
					<Swiper
						class="mt-10"
						:space-between="14"
						:breakpoints="{
							0: {
								slidesPerView: 3
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
						<SwiperSlide v-for="category in categories" :key="category.id">
							<ULink class="space-y-2 group flex flex-col gap-2 items-center" :to="localePath(`/categories/${category.slug}`)">
								<div class="h-28 w-28 sm:h-[220px] sm:w-[220px] overflow-hidden rounded-full flex items-center justify-center bg-grey">
									<img class="object-contain w-full h-full" :src="category.lg_img" :alt="category.name" />
								</div>
								<p class="text-xs sm:text-base text-center font-medium text-[#353437] group-hover:text-green duration-200 px-3 sm:px-0">{{ category.name }}</p>
							</ULink>
						</SwiperSlide>
					</Swiper>
				</section>
				<div class="rounded-3xl">
					<ULink to="/" class="block w-full">
						<img class="w-full" src="~/assets/images/png/home-banner-1.png" alt="home banner" />
					</ULink>
				</div>
				<section>
					<div class="flex items-center justify-between">
						<h3 class="text-lg lg:text-2xl xl:text-3xl font-medium">{{ data?.showcases[0]?.name }}</h3>
						<!-- localePath(`/showcases/${data.showcases[0].slug}`) -->
						<UButton
							:to="`/`"
							size="xl"
							:ui="{ padding: { xl: 'p-0 sm:px-6 sm:py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
							class="hover:bg-transparent text-grey-2"
							variant="ghost"
							label="Подробноее"
							trailing-icon="i-heroicons-chevron-double-right"
						>
						</UButton>
					</div>
					
					<div class="mt-10 grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
						<TheCard v-for="(product, i) in data.showcases[0].products" :data="product" :key="i" />
					</div>
				</section>
				<div class="grid grid-cols-3 gap-6">
					<ULink to="/" class="block col-span-2 rounded-3xl">
						<img class="w-full" src="~/assets/images/png/home-banner-2.png" alt="home banner" />
					</ULink>
					<ULink to="/" class="block rounded-3xl">
						<img class="w-full" src="~/assets/images/png/home-banner-3.png" alt="home banner" />
					</ULink>
				</div>
				<section>
					<div class="flex items-center justify-between">
						<h3 class="text-lg lg:text-2xl xl:text-3xl font-medium">{{ data.showcases[1].name }}</h3>
						<!-- localePath(`/showcases/${data.showcases[1].slug}`) -->
						<UButton
							:to="`/`"
							size="xl"
							:ui="{ padding: { xl: 'p-0 sm:px-6 sm:py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
							class="hover:bg-transparent text-grey-2"
							variant="ghost"
							label="Подробноее"
							trailing-icon="i-heroicons-chevron-double-right"
						>
						</UButton>
					</div>
					<div class="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<TheCard v-for="product in data.showcases[1].products.slice(0, 8)" :data="product" :key="product.id" />
					</div>
				</section>
				<section>
					<h3 class="text-3xl font-medium">Идеи для дома</h3>
					<div class="mt-10 grid grid-cols-5 gap-6">
						<ULink class="rounded-3xl overflow-hidden" to="/">
							<img class="w-full object-cover h-full" src="~/assets/images/png/home-img-1.png" alt="home img 1" />
						</ULink>
						<ULink class="col-span-2 rounded-3xl overflow-hidden" to="/">
							<img class="w-full object-cover h-full" src="~/assets/images/png/home-img-2.png" alt="home img 2" />
						</ULink>
						<ULink class="col-span-2 rounded-3xl overflow-hidden" to="/">
							<img class="w-full h-full" src="~/assets/images/png/home-banner-4.png" alt="home banner 4" />
						</ULink>
						<ULink class="col-span-2 rounded-3xl overflow-hidden" to="/">
							<img class="w-full object-cover h-full" src="~/assets/images/png/home-img-3.png" alt="home img 3" />
						</ULink>
						<ULink class="col-span-2 rounded-3xl overflow-hidden" to="/">
							<img class="w-full object-cover h-full" src="~/assets/images/png/home-img-4.png" alt="home img 4" />
						</ULink>
						<ULink class="rounded-3xl overflow-hidden" to="/">
							<img class="w-full object-cover h-full" src="~/assets/images/png/home-img-5.png" alt="home img 5" />
						</ULink>
					</div>
				</section>
				<section>
					<div class="flex items-center justify-between">
						<h3 class="text-lg lg:text-2xl xl:text-3xl font-medium">{{ data.showcases[2].name }}</h3>
						<!-- localePath(`/showcases/${data.showcases[2].slug}`) -->
						<UButton
							:to="`/`"
							size="xl"
							:ui="{ padding: { xl: 'p-0 sm:px-6 sm:py-3' }, rounded: 'rounded-full', icon: { size: { xl: 'h-5 w-5' } } }"
							class="hover:bg-transparent text-grey-2"
							variant="ghost"
							label="Подробноее"
							trailing-icon="i-heroicons-chevron-double-right"
						>
						</UButton>
					</div>
					<div class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
						<TheCard v-for="product in data.showcases[2].products.slice(0, 8)" :data="product" :key="product.id" />
					</div>
				</section>
				<section>
					<h3 class="text-3xl font-medium">Вместе с Woodline</h3>
					<Swiper
						class="mt-10"
						:space-between="12"
						:breakpoints="{
							0: {
								slidesPerView: 2.1
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
						<SwiperSlide v-for="slide in 10" :key="slide">
							<ULink class="flex flex-col gap-2 items-start" to="/">
								<div class="h-[170px] sm:h-[342px] rounded-2xl overflow-hidden flex items-center justify-center">
									<img class="object-cover w-full h-full" src="~/assets/images/png/home-img-6.png" alt="home img 6" />
								</div>
								<p class="font-medium text-grey-1 text-sm sm:text-base">@Woodline</p>
							</ULink>
						</SwiperSlide>
					</Swiper>
				</section>
				<section>
					<h3 class="text-3xl font-medium">Наши офисы</h3>
					<div class="mt-10 h-[330px] overflow-hidden rounded-3xl">
						<img class="object-cover h-full w-full" src="~/assets/images/png/home-map.png" alt="map" />
					</div>
				</section>
			</div>
		</main>
	</div>
</template>
<script setup>
import { useShowcases } from '~/stores/showcases';
import { useCategories } from '~/stores/categories';

const localePath = useLocalePath();
const { categories } = storeToRefs(useCategories());

const { data } = await useAsyncData(async () => {
	let { showcases } = await useShowcases().getShowcases();
	return {
		showcases
	};
});
</script>
<style scoped>
.categories_products::-webkit-scrollbar {
	height: 0px;
}
</style>
