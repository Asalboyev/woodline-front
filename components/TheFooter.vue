<template>
	<footer class="bg-grey">
		<div class="wrapper pt-10 space-y-10">
			<div class="flex flex-wrap sm:flex-row gap-2 sm:justify-between items-center">
				<ULink to="/" class="w-[130px]">
					<img src="~/assets/images/png/logo.png" class="w-full" alt="footer logo" />
				</ULink>
				<p class="text-grey-2">Адрес для направления юридически значимых сообщений: help@woodline.uz</p>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				<div class="flex flow-row gap-4 sm:flex-col sm:gap-8 order-4 xl:order-none">
					<div class="flex flex-col gap-4">
						<h3 class="text-base font-medium">Связаться с нами</h3>
						<a href="tel:+781137080" class="font-normal text-base text-grey-2">78 113-70-80</a>
						<a href="tel:+909177756" class="font-normal text-base text-grey-2">90 917-77-56</a>
						<a href="#" class="font-normal text-base text-grey-2">help@woodline.uz</a>
						<a href="#" class="font-normal text-base text-grey-2">Адреса магазинов</a>
						<a href="#" class="flex items-center gap-2">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.0008 18.3346C5.39844 18.3346 1.66748 14.6036 1.66748 10.0013C1.66748 5.39893 5.39844 1.66797 10.0008 1.66797C14.6032 1.66797 18.3342 5.39893 18.3342 10.0013C18.3342 14.6036 14.6032 18.3346 10.0008 18.3346ZM7.40927 10.977L7.41981 10.9703C7.90292 12.5652 8.14447 13.3627 8.14447 13.3627C8.23803 13.6215 8.36666 13.6676 8.52275 13.6466C8.67875 13.6254 8.76158 13.541 8.86341 13.4427C8.86341 13.4427 9.19366 13.124 9.85416 12.4866L11.9799 14.0595C12.3672 14.2735 12.6469 14.1631 12.7431 13.6994L14.1246 7.18164C14.2771 6.57499 14.0096 6.33167 13.5392 6.52425L5.42831 9.65722C4.87496 9.87963 4.87764 10.1892 5.32756 10.3272L7.40927 10.977Z"
									fill="#020105"
								/>
							</svg>
							<span>Телеграм канал</span>
						</a>
					</div>
					<div class="flex flex-col gap-4">
						<h3 class="text-base font-medium">Соц сеть</h3>
						<div class="flex items-center gap-6">
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M10.0008 18.3346C5.39844 18.3346 1.66748 14.6036 1.66748 10.0013C1.66748 5.39893 5.39844 1.66797 10.0008 1.66797C14.6032 1.66797 18.3342 5.39893 18.3342 10.0013C18.3342 14.6036 14.6032 18.3346 10.0008 18.3346ZM7.40927 10.977L7.41981 10.9703C7.90292 12.5652 8.14447 13.3627 8.14447 13.3627C8.23803 13.6215 8.36666 13.6676 8.52275 13.6466C8.67875 13.6254 8.76158 13.541 8.86341 13.4427C8.86341 13.4427 9.19366 13.124 9.85416 12.4866L11.9799 14.0595C12.3672 14.2735 12.6469 14.1631 12.7431 13.6994L14.1246 7.18164C14.2771 6.57499 14.0096 6.33167 13.5392 6.52425L5.42831 9.65722C4.87496 9.87963 4.87764 10.1892 5.32756 10.3272L7.40927 10.977Z"
										fill="#5D5D5F"
									/>
								</svg>
							</a>
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M10.0008 1.66797C5.39844 1.66797 1.66748 5.39893 1.66748 10.0013C1.66748 14.1607 4.71486 17.6082 8.69875 18.2334V12.4101H6.58284V10.0013H8.69875V8.16537C8.69875 6.07683 9.94283 4.92318 11.8463 4.92318C12.7581 4.92318 13.7117 5.08594 13.7117 5.08594V7.13672H12.6609C11.6257 7.13672 11.3029 7.77909 11.3029 8.43814V10.0013H13.6141L13.2447 12.4101H11.3029V18.2334C15.2867 17.6082 18.3342 14.1607 18.3342 10.0013C18.3342 5.39893 14.6032 1.66797 10.0008 1.66797Z"
										fill="#5D5D5F"
									/>
								</svg>
							</a>
							<a href="" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M10.8567 1.66797C11.7946 1.66952 12.2698 1.67448 12.6805 1.6867L12.8422 1.69199C13.0291 1.69864 13.2134 1.70697 13.4357 1.71739C14.3224 1.75835 14.9273 1.89864 15.4586 2.10489C16.0078 2.31669 16.4717 2.6028 16.9349 3.06599C17.3974 3.52919 17.6836 3.99447 17.8961 4.54239C18.1016 5.07294 18.2419 5.67849 18.2836 6.5653C18.2935 6.78752 18.3015 6.97185 18.3081 7.15873L18.3133 7.32046C18.3255 7.73109 18.3311 8.2064 18.3328 9.14424L18.3335 9.76565C18.3336 9.84157 18.3336 9.9199 18.3336 10.0007L18.3335 10.2358L18.333 10.8572C18.3314 11.7951 18.3265 12.2703 18.3142 12.681L18.3089 12.8427C18.3023 13.0296 18.294 13.2139 18.2836 13.4362C18.2426 14.3229 18.1016 14.9278 17.8961 15.4591C17.6842 16.0083 17.3974 16.4722 16.9349 16.9354C16.4717 17.3979 16.0057 17.6841 15.4586 17.8966C14.9273 18.1021 14.3224 18.2424 13.4357 18.2841C13.2134 18.294 13.0291 18.302 12.8422 18.3086L12.6805 18.3138C12.2698 18.326 11.7946 18.3316 10.8567 18.3333L10.2353 18.334C10.1594 18.3341 10.0811 18.3341 10.0002 18.3341L9.76516 18.334L9.14375 18.3335C8.20591 18.3319 7.7306 18.327 7.31997 18.3147L7.15824 18.3094C6.97136 18.3028 6.78703 18.2945 6.56481 18.2841C5.67801 18.2431 5.07384 18.1021 4.5419 17.8966C3.99328 17.6847 3.5287 17.3979 3.06551 16.9354C2.60231 16.4722 2.3169 16.0062 2.1044 15.4591C1.89815 14.9278 1.75856 14.3229 1.7169 13.4362C1.707 13.2139 1.69892 13.0296 1.69238 12.8427L1.68714 12.681C1.67495 12.2703 1.66939 11.7951 1.66759 10.8572L1.66748 9.14424C1.66903 8.2064 1.67399 7.73109 1.68621 7.32046L1.69151 7.15873C1.69815 6.97185 1.70648 6.78752 1.7169 6.5653C1.75786 5.6778 1.89815 5.07364 2.1044 4.54239C2.3162 3.99377 2.60231 3.52919 3.06551 3.06599C3.5287 2.6028 3.99398 2.31739 4.5419 2.10489C5.07315 1.89864 5.67731 1.75905 6.56481 1.71739C6.78703 1.70749 6.97136 1.69941 7.15824 1.69287L7.31997 1.68763C7.7306 1.67544 8.20591 1.66988 9.14375 1.66808L10.8567 1.66797ZM10.0002 5.83405C7.69781 5.83405 5.83356 7.70033 5.83356 10.0007C5.83356 12.3032 7.69984 14.1674 10.0002 14.1674C12.3027 14.1674 14.1669 12.3011 14.1669 10.0007C14.1669 7.6983 12.3006 5.83405 10.0002 5.83405ZM10.0002 7.50072C11.381 7.50072 12.5002 8.61957 12.5002 10.0007C12.5002 11.3815 11.3813 12.5007 10.0002 12.5007C8.6195 12.5007 7.50023 11.3818 7.50023 10.0007C7.50023 8.61999 8.61908 7.50072 10.0002 7.50072ZM14.3752 4.58405C13.8008 4.58405 13.3336 5.05064 13.3336 5.62501C13.3336 6.19938 13.8002 6.66669 14.3752 6.66669C14.9496 6.66669 15.4169 6.2001 15.4169 5.62501C15.4169 5.05064 14.9488 4.58333 14.3752 4.58405Z"
										fill="#5D5D5F"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-8 order-5 xl:order-none">
					<div class="flex flex-col gap-4">
						<h3 class="text-base font-medium">Режим работы call-центра</h3>
						<span class="font-normal text-base text-grey-2">ежедневно с 9:00 до 22:00</span>
					</div>
					<div class="flex flex-col gap-4">
						<h3 class="text-base font-medium">Доставка заказов</h3>
						<span class="font-normal text-base text-grey-2">с 9:00 до 23:00</span>
					</div>
				</div>
				<nav class="flex flex-col gap-4 order-3 xl:order-none border-b lg:border-b-0 border-grey-0 pb-4">
					<h3 class="text-base font-medium">Getting Started</h3>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">О нас</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Команда</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Гарантия</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">История</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Вакансии</NuxtLink>
				</nav>
				<nav class="flex flex-col gap-4 order-2 xl:order-none border-b lg:border-b-0 border-grey-0 pb-4">
					<h3 class="text-base font-medium">Полезная информация</h3>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Акции</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Частые вопросы</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Доставка</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Оплата</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Возврат</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Уход за мебелью</NuxtLink>
				</nav>
				<nav class="flex flex-col gap-4 order-1 xl:order-none border-b lg:border-b-0 border-grey-0 pb-4">
					<h3 class="text-base font-medium">Каталог</h3>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Стеллажи</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Журналние столики</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Обеденные комплекты</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Матрасы</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Рабочие столы</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Тумбы под ТВ</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Кровати</NuxtLink>
					<NuxtLink to="/" class="text-base text-grey-2 font-normal">Диваны</NuxtLink>
				</nav>
			</div>
			<div class="py-6 pb-24 lg:pb-6 border-t border-grey-3">
				<p class="text-grey-2">© 2024 Интернет-магазин Woodline.</p>
			</div>
		</div>
		<nav
			class="bottom-actions fixed left-0 bottom-0 w-full z-[21] translate-y-0 lg:hidden flex flex-row gap-1 px-2 items-center justify-between bg-white border-t border-grey-0 rounded-[16px_16px_0px_0px] py-2 transition-all duration-300"
		>
			<NuxtLink @click="useHeader().isCategoryOpened = false" :to="localePath('/')" class="flex flex-col items-center gap-2 group">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="!useHeader().isCategoryOpened && route.path === localePath('/') ? '#089e5f' : 'none'">
					<path
						d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z"
						:stroke="!useHeader().isCategoryOpened && route.path === localePath('/') ? '#089e5f' : '#5D5D5F'"
						stroke-width="1.5"
						stroke-linejoin="round"
					/>
					<path d="M10 18H14" :stroke="!useHeader().isCategoryOpened && route.path === localePath('/') ? '#fff' : '#5D5D5F'" stroke-width="1.5" stroke-linecap="round" />
				</svg>
				<span :class="!useHeader().isCategoryOpened && route.path === localePath('/') ? 'text-green' : 'text-grey-2'" class="text-xs group-hover:text-green">Главная</span>
			</NuxtLink>
			<button @click="useHeader().isCategoryOpened = true" class="flex flex-col items-center gap-2 group">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z"
						:stroke="useHeader().isCategoryOpened ? `#089e5f` : `#5D5D5F`"
						stroke-width="1.5"
					/>
					<path
						d="M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z"
						:stroke="useHeader().isCategoryOpened ? `#089e5f` : `#5D5D5F`"
						stroke-width="1.5"
					/>
					<path
						d="M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6Z"
						:stroke="useHeader().isCategoryOpened ? `#089e5f` : `#5D5D5F`"
						stroke-width="1.5"
					/>
					<path
						d="M14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16Z"
						:stroke="useHeader().isCategoryOpened ? `#089e5f` : `#5D5D5F`"
						stroke-width="1.5"
					/>
				</svg>
				<span :style="{ color: useHeader().isCategoryOpened ? `#089e5f` : `#5D5D5F` }" class="text-grey-2 text-xs group-hover:text-green">Категории</span>
			</button>
			<UChip :text="favorites.length" size="2xl">
				<NuxtLink :to="localePath('/favorites')" class="flex flex-col items-center gap-2 group">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M17 6.4998C18.1045 6.4998 19 7.39523 19 8.4998M12 5.70234L12.6851 4.99981C14.816 2.81452 18.2709 2.81452 20.4018 4.9998C22.4755 7.1264 22.5392 10.5536 20.5461 12.7597L14.8197 19.098C13.2984 20.7818 10.7015 20.7818 9.18026 19.098L3.45393 12.7598C1.46078 10.5536 1.5245 7.12643 3.5982 4.99982C5.72912 2.81453 9.18404 2.81453 11.315 4.99982L12 5.70234Z"
							:stroke="!useHeader().isCategoryOpened && route.path === localePath('/favorites') ? `#089e5f` : `#5D5D5F`"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span :style="{ color: !useHeader().isCategoryOpened && route.path === localePath('/favorites') ? `#089e5f` : `#5D5D5F` }" class="text-grey-2 text-xs group-hover:text-green">Избранное</span>
				</NuxtLink>
			</UChip>
			<UChip :text="carts.length" size="2xl">
				<NuxtLink :to="localePath('/cart')" class="flex flex-col items-center gap-2 group">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M2.58683 10H21.4132M8 14H16M9 18H15M9 2L6 6M15 2L18 6M18.0351 6L5.96486 6C3.45403 6 1.57594 8.32624 2.08312 10.808L3.71804 18.808C4.09787 20.6666 5.71942 22 7.59978 22H16.4002C18.2806 22 19.9021 20.6666 20.282 18.808L21.9169 10.808C22.4241 8.32624 20.546 6 18.0351 6Z"
							:stroke="!useHeader().isCategoryOpened && route.path === localePath('/cart') ? `#089e5f` : `#5D5D5F`"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span :style="{ color: !useHeader().isCategoryOpened && route.path === localePath('/cart') ? `#089e5f` : `#5D5D5F` }" class="text-grey-2 text-xs group-hover:text-green">Корзина</span>
				</NuxtLink>
			</UChip>
			<NuxtLink to="/" class="flex flex-col items-center gap-2 group">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<ellipse cx="12" cy="17.5" rx="7" ry="3.5" stroke="#5D5D5F" stroke-width="1.5" stroke-linejoin="round" />
					<circle cx="12" cy="7" r="4" stroke="#5D5D5F" stroke-width="1.5" stroke-linejoin="round" />
				</svg>
				<span class="text-grey-2 text-xs group-hover:text-green">Профиль</span>
			</NuxtLink>
		</nav>
	</footer>
</template>
<script setup>
import { useFavoritesStore } from '~/stores/favorite';
import { useCartStore } from '~/stores/cart';
import { useHeader } from '~/stores/header';

const { favorites } = storeToRefs(useFavoritesStore());
const { carts } = storeToRefs(useCartStore());

const route = useRoute();
const localePath = useLocalePath();
</script>
<style></style>
