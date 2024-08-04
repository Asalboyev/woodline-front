<template>
	<transition name="fade">
		<div v-if="isSearchFocused" class="w-screen min-h-screen fixed top-0 left-0 z-[18] bg-black/[.24] backdrop-blur-sm"></div>
	</transition>
	<div class="hidden lg:block w-full relative z-[19]">
		<div class="bg-grey">
			<div class="wrapper">
				<div class="py-2 flex justify-between items-center">
					<ul class="flex gap-10 text-sm">
						<li>
							<ULink class="text-grey-2">Toshkent</ULink>
						</li>
						<li>
							<ULink href="tel:+998994445202" class="text-grey-2">+998 99 444 52 02</ULink>
						</li>
					</ul>
					<div class="flex gap-4 items-center">
						<ul class="flex gap-10 text-sm">
							<li>
								<ULink class="text-grey-2">Офис локация</ULink>
							</li>
							<li>
								<ULink href="tel:+998781231515" class="text-grey-2">Получить консультация</ULink>
							</li>
							<li>
								<ULink href="tel:+998781231515" class="text-grey-2">О компания</ULink>
							</li>
						</ul>
						<UDropdown
							:items="langs"
							:ui="{
								background: 'white',
								base: 'w-40 mx-auto',
								ring: 'ring-grey-0'
							}"
							:popper="{ placement: 'bottom' }"
						>
							<UButton icon="i-heroicons-envelope" class="text-grey-2 hover:bg-transparent" variant="ghost" :label="selectedLang.label" trailing-icon="i-heroicons-chevron-down-20-solid">
								<template #leading>
									<img class="w-6 rounded-md" :src="selectedLang.avatar.src" alt="avatar" />
								</template>
							</UButton>
						</UDropdown>
					</div>
				</div>
			</div>
		</div>
	</div>
	<header id="header" class="bg-white duration-300 ease transition-all z-[18] sticky top-0 w-full">
		<div class="wrapper py-4">
			<div class="flex flex-col lg:flex-row gap-2 lg:gap-9 items-center">
				<div class="lg:hidden flex items-center justify-between w-full">
					<ULink class="w-[100px] flex" to="/">
						<img src="~/assets/images/png/logo.png" alt="logo" />
					</ULink>
					<UButton class="text-base p-0 flex" variant="ghost" @click="isMenuOpen = !isMenuOpen">
						<template #leading>
							<svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
								<path d="M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333" stroke="#020105" stroke-width="1.5" stroke-linecap="round" />
							</svg>
							<svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
								<path d="M27.0712 12.9288L12.929 27.0709M27.0712 27.0708L12.929 12.9287" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</template>
					</UButton>
				</div>
				<ULink class="w-[130px] hidden lg:flex" to="/">
					<img src="~/assets/images/png/logo.png" alt="logo" />
				</ULink>
				<UButton @click="isMenuOpen = !isMenuOpen" size="xl" :ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full' }" class="text-base hidden lg:flex" variant="solid" label="Каталог">
					<template #leading>
						<label class="hamburger select-none pointer-events-none">
							<input v-model="isMenuOpen" type="checkbox" />
							<svg viewBox="0 0 32 32">
								<path
									class="line line-top-bottom"
									d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
								></path>
								<path class="line" d="M7 16 27 16"></path>
							</svg>
						</label>
					</template>
				</UButton>
				<div class="grow relative w-full lg:w-auto">
					<UInput
						class="w-full z-[21] relative"
						:ui="{
							padding: { xl: 'px-6 py-3' },
							rounded: 'rounded-full',
							color: {
								white: {
									outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
								}
							}
						}"
						color="white"
						size="xl"
						placeholder="Введите запрос"
						@keydown.enter="searchFunction"
						v-model="searchQuery"
					>
						<div class="!cursor-pointer absolute inset-y-0 end-0 flex items-center px-3.5" @click="searchFunction">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path
									d="M22.5 22L20.5 20M2.5 11.5C2.5 6.25329 6.75329 2 12 2C17.2467 2 21.5 6.25329 21.5 11.5C21.5 16.7467 17.2467 21 12 21C6.75329 21 2.5 16.7467 2.5 11.5Z"
									stroke="#020105"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</UInput>
					<!-- <transition name="fade-transform">
						<div v-if="isSearchFocused" class="hidden sm:block absolute top-16 p-6 w-full z-[49] left-0 rounded-3xl border border-grey-0 bg-white shadow-lg">
							<div class="flex items-center justify-between">
								<p class="font-semibold text-xs text-grey-header/[.80]">ПОСЛЕДНИЕ ПОИСКИ</p>
								<button class="text-sm">Очистить</button>
							</div>
							<ul class="flex gap-2 flex-col mt-2">
								<li v-for="item in 4" :key="item">
									<UButton
										:to="localePath('/search')"
										:ui="{ icon: { base: 'text-grey-1 last:ml-auto last:w-5' } }"
										size="xl"
										variant="ghost"
										class="rounded-lg w-full text-black"
										label="Pedagogning maqomi to'g'risida”gi Qonun imzolandi"
										leading-icon="i-heroicons-clock"
										trailing-icon="i-heroicons-x-mark"
									>
									</UButton>
								</li>
							</ul>
							<UDivider class="mt-4" :ui="{ border: { base: 'border-white-222' } }" />
							<p class="font-semibold text-xs text-grey-header/[.80] mt-4">ПОПУЛЯРНЫЕ</p>
							<ul class="flex gap-2 flex-col mt-4">
								<li v-for="item in 2" :key="item">
									<UButton :to="localePath('/search')" size="xl" variant="ghost" class="rounded-lg w-full text-black" label="Pedagogning maqomi to'g'risida”gi Qonun imzolandi">
										<template #leading>
											<img src="~/assets/images/svg/search-grey.svg" alt="search icon" />
										</template>
									</UButton>
								</li>
							</ul>
						</div>
					</transition> -->
				</div>
				<div class="hidden lg:flex items-center gap-4 xl:gap-8">
					<NuxtLink to="/cart" class="group text-center">
						<UChip :text="carts.length" size="2xl">
							<img src="~/assets/images/svg/cart.svg" alt="cart" />
						</UChip>
						<p class="text-grey-2 group-hover:text-green duration-200">Корзина</p>
					</NuxtLink>
					<NuxtLink to="/favorites" class="group text-center">
						<UChip :text="favorites.length" size="2xl">
							<img src="~/assets/images/svg/heart.svg" alt="heart" />
						</UChip>
						<p class="text-grey-2 group-hover:text-green duration-200">Избранное</p>
					</NuxtLink>
					<NuxtLink to="/compare" class="group text-center">
						<UChip :text="compares.length" size="2xl">
							<img class="w-7 h-7" src="~/assets/images/svg/comparison.svg" alt="comparison" />
						</UChip>
						<p class="text-grey-2 group-hover:text-green duration-200">Сравнение</p>
					</NuxtLink>
					<NuxtLink to="/profile" v-if="isAuthenticated">
						<img class="mx-auto" src="~/assets/images/svg/user.svg" alt="user" />
						<p class="text-grey-2 group-hover:text-green duration-200">профиль</p>
					</NuxtLink>
					<button class="space-y-1 group" @click="openModal" v-if="!isAuthenticated">
						<img class="mx-auto" src="~/assets/images/svg/user.svg" alt="user" />
						<p class="text-grey-2 group-hover:text-green duration-200">Войти</p>
					</button>
				</div>
			</div>
		</div>
		<div class="wrapper pb-4 hidden lg:flex items-center relative">
			<ULink to="/promotions" :class="{ 'text-orange': route.path === '/promotions' }" class="flex gap-2 hover:text-orange text-grey-2 duration-200 group items-center">
				<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						:class="{ 'fill-orange': route.path === '/promotions' }"
						class="group-hover:fill-orange duration-200 fill-grey-2"
						d="M4 18C1.79086 18 0 16.2091 0 14V13C0 12.4477 0.460003 12.0163 0.981894 11.8356C2.15653 11.4289 3 10.313 3 9C3 7.68703 2.15653 6.57105 0.981894 6.16437C0.460003 5.98368 0 5.55228 0 5V4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V5C20 5.55228 19.54 5.98368 19.0181 6.16437C17.8435 6.57105 17 7.68703 17 9C17 10.313 17.8435 11.4289 19.0181 11.8356C19.54 12.0163 20 12.4477 20 13V14C20 16.2091 18.2091 18 16 18H4ZM7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7ZM14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967C13.2374 5.17678 12.7626 5.17678 12.4697 5.46967L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303C6.76256 12.8232 7.23744 12.8232 7.53033 12.5303L13.5303 6.53033Z"
					/>
				</svg>
				Акции
			</ULink>
			<nav class="flex items-center flex-wrap gap-4 xl:gap-10 ml-10">
				<ULink
					v-for="link in categories.slice(0, 7)"
					:key="link.id"
					active-class="text-green"
					inactive-class="text-grey-2 hover:text-green"
					class="duration-200 text-sm xl:text-base"
					:to="`/categories/${link.slug}`"
				>
					{{ link.name }}</ULink
				>
			</nav>
		</div>
		<transition name="fade">
			<div v-if="isMenuOpen" class="lg:block hidden absolute bg-white py-10 w-full top-30 left-0 h-screen">
				<div class="wrapper flex">
					<div class="w-1/5 pr-6 overflow-y-auto max-h-[calc(100dvh-250px)]">
						<ul class="space-y-10">
							<li
								@click="menuActive = link.id"
								v-for="link in categories"
								:key="link.id"
								:class="{ 'text-green': menuActive === link.id }"
								class="flex items-center justify-between cursor-pointer duration-200"
							>
								<p>{{ link.name }}</p>
								<UIcon v-if="menuActive === link.id" name="i-heroicons-chevron-right"></UIcon>
							</li>
						</ul>
					</div>
					<div class="flex-1 pl-12 border-l border-grey-0 overflow-y-auto max-h-[calc(100dvh-250px)]">
						<h3 class="text-xl font-medium">
							<ULink class="hover:text-green duration-200" :to="`/categories/${category.slug}`">{{ category.name }} </ULink>
						</h3>
						<div class="mt-6 flex">
							<div class="w-1/2">
								<masonry-wall :items="category?.children" :ssr-columns="2" :column-width="300" :gap="16">
									<template #default="{ item }">
										<ul class="space-y-4 text-grey-2">
											<li class="text-black font-medium">
												<ULink class="hover:text-green duration-200" :to="`/categories/${item.slug}`">{{ item.name }}</ULink>
											</li>
											<li v-for="(subChild, i) in item.children" :key="i">
												<ULink class="hover:text-green duration-200" :to="`/categories/${subChild.slug}`">- {{ subChild.name }}</ULink>
											</li>
										</ul>
									</template>
								</masonry-wall>

								<!-- <ul v-for="child in category.children.slice(0, Math.ceil(category.children.length / 2))" :key="child.id" class="space-y-4 text-grey-2">
										<li class="text-black font-medium">
											<ULink class="hover:text-green duration-200" :to="`/categories/${child.slug}`">{{ child.name }}</ULink>
										</li>
										<li v-for="subChild in child.children" :key="subChild.id">
											<ULink class="hover:text-green duration-200" :to="`/categories/${subChild.slug}`">- {{ subChild.name }}</ULink>
										</li>
									</ul> -->
								<!-- <div v-if="category.children.length > 1" class="space-y-10">
									<ul v-for="child in category.children.slice(Math.floor(category.children.length / 2))" :key="child.id" class="space-y-4 text-grey-2">
										<li class="text-black font-medium">
											<ULink class="hover:text-green duration-200" :to="`/categories/${child.slug}`">{{ child.name }}</ULink>
										</li>
										<li v-for="subChild in child.children" :key="subChild.id">
											<ULink class="hover:text-green duration-200" :to="`/categories/${subChild.slug}`">- {{ subChild.name }}</ULink>
										</li>
									</ul>
								</div> -->
							</div>
							<div class="w-1/2">
								<ULink to="/promotions">
									<img src="~/assets/images/png/header-banner.png" alt="header banner" />
								</ULink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</header>
	<ModalLoginForm :isFormModal="isOpenModal" @update:isFormModal="handleModalUpdate" />
	<transition name="fade">
		<HeaderNavigation v-if="isMenuOpen" />
	</transition>
	<transition name="fade-transform">
		<div v-if="isSearchFocused" class="block sm:hidden fixed top-32 left-0 w-full h-[calc(100vh-128px)] overflow-y-auto bg-white z-20">
			<div class="wrapper">
				<div class="flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<span class="text-xs text-grey-header flex-1 font-medium">ПОСЛЕДНИЕ ПОИСКИ</span>
						<button class="text-sm text-grey-header font-medium">Очистить</button>
					</div>
					<ul class="flex flex-col gap-4">
						<li class="flex items-center justify-between gap-2" v-for="(item, i) in 10" :key="i">
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<g clip-path="url(#clip0_647_7432)">
										<path
											d="M10 10.0001H9.25002C9.25002 10.3229 9.45659 10.6095 9.76285 10.7116L10 10.0001ZM10.75 5.83342C10.75 5.4192 10.4142 5.08342 10 5.08342C9.58581 5.08342 9.25002 5.4192 9.25002 5.83342H10.75ZM12.2628 11.5449C12.6558 11.6759 13.0805 11.4635 13.2115 11.0706C13.3425 10.6776 13.1301 10.2529 12.7372 10.1219L12.2628 11.5449ZM10.75 10.0001V5.83342H9.25002V10.0001H10.75ZM9.76285 10.7116L12.2628 11.5449L12.7372 10.1219L10.2372 9.28857L9.76285 10.7116ZM17.5834 10.0001C17.5834 14.1882 14.1882 17.5834 10 17.5834V19.0834C15.0166 19.0834 19.0834 15.0167 19.0834 10.0001H17.5834ZM10 17.5834C5.81186 17.5834 2.41669 14.1882 2.41669 10.0001H0.916687C0.916687 15.0167 4.98343 19.0834 10 19.0834V17.5834ZM2.41669 10.0001C2.41669 5.81192 5.81186 2.41675 10 2.41675V0.916748C4.98343 0.916748 0.916687 4.98349 0.916687 10.0001H2.41669ZM10 2.41675C14.1882 2.41675 17.5834 5.81192 17.5834 10.0001H19.0834C19.0834 4.98349 15.0166 0.916748 10 0.916748V2.41675Z"
											fill="#9A999B"
										/>
									</g>
									<defs>
										<clipPath id="clip0_647_7432">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</span>
							<span class="text-sm flex-1">Спальный гарнитур Розанна-6 (венге) A Mebel 10001023</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M16.2427 7.75738L7.75745 16.2427M16.2427 16.2426L7.75745 7.75732" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { useCategories } from '~/stores/categories';
import { useHeader } from '~/stores/header';
import { useFavoritesStore } from '~/stores/favorite';
import { useCartStore } from '~/stores/cart';
import { useCompareStore } from '~/stores/compare';
import { useAuth } from '~/stores/auth';

const { setLocale, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

const { favorites } = storeToRefs(useFavoritesStore());
const { carts } = storeToRefs(useCartStore());
const { compares } = storeToRefs(useCompareStore());
const { isCategoryOpened } = storeToRefs(useHeader());
const { categories } = storeToRefs(useCategories());

const authStore = useAuth();

const { isAuthenticated, isOpenModal } = storeToRefs(authStore);

const langs = [
	[
		{
			id: 'ru',
			label: 'Русский',
			avatar: { src: '/assets/images/png/russian.png' },
			click: () => {
				selectedLang.value = langs[0][0];
			}
		},
		{
			id: 'uz',
			label: "O'zbek",
			avatar: { src: '/assets/images/png/russian.png' },
			click: () => {
				selectedLang.value = langs[0][1];
			}
		},
		{
			id: 'en',
			label: 'English',
			avatar: { src: '/assets/images/png/russian.png' },
			click: () => {
				selectedLang.value = langs[0][2];
			}
		}
	]
];

// variables
const searchQuery = ref('');

const isSearchFocused = ref(false);
const isMenuOpen = ref(false);
const menuActive = ref(categories.value[0].id);
const selectedLang = ref(langs[0].find((lang) => lang.id === locale.value));


const category = computed(() => categories.value.find((item) => item.id === menuActive.value));

const openModal = () => {
	isOpenModal.value = true;
};

const handleModalUpdate = (newVal) => {
	isOpenModal.value = newVal;
};

const searchFunction = () => {
	const trimmedQuery = searchQuery.value.trim();
	if (trimmedQuery) {
		router.push({ path: '/search', query: { search: searchQuery.value } });
	}
};

// watcher
watch([isMenuOpen, isSearchFocused], ([menuOpen, searchFocused]) => {
	if (menuOpen || searchFocused) {
		document.documentElement.style.overflow = 'hidden';
	} else {
		isCategoryOpened.value = false;
		document.documentElement.style.overflow = 'auto';
	}
});

watch(
	() => isCategoryOpened.value,
	(newVal) => {
		if (newVal) {
			isMenuOpen.value = true;
		}
	}
);

watch(
	() => route.path,
	() => {
		isMenuOpen.value = false;
		isSearchFocused.value = false;
	}
);

watch(selectedLang, (newVal) => {
	setLocale(newVal.id);
});

// eventListeners
onMounted(() => {
	if (process.client) {
		const header = document.querySelector('#header');
		window.addEventListener('scroll', () => {
			if (window.scrollY > 48) {
				header.classList.add('shadow-lg');
			} else if (window.scrollY <= 48) {
				header.classList.remove('shadow-lg');
			}
		});
	}
});

onUnmounted(() => {
	if (process.client) {
		window.removeEventListener('scroll', () => {
			if (window.scrollY > 48) {
				header.classList.add('shadow-lg');
			} else if (window.scrollY <= 48) {
				header.classList.remove('shadow-lg');
			}
		});
	}
});
</script>

<style>
.hamburger {
	cursor: pointer;
}

.hamburger input {
	display: none;
}

.hamburger svg {
	/* The size of the SVG defines the overall size */
	height: 1.5em;
	/* Define the transition for transforming the SVG */
	transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line {
	fill: none;
	stroke: #fff;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
	/* Define the transition for transforming the Stroke */
	transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line-top-bottom {
	stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
	transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
	stroke-dasharray: 20 300;
	stroke-dashoffset: -32.42;
}
</style>
