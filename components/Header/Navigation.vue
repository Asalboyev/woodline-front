<template>
	<div class="lg:hidden block fixed overflow-hidden h-[calc(100vh-127px)] top-[127px] bg-white w-full z-20">
		<div class="h-full w-full overflow-x-hidden overflow-y-auto relative">
			<div class="flex flex-col justify-between h-full w-full z-0">
				<div class="flex flex-col">
					<nav class="flex flex-col gap-2 items-start">
						<p @click="isCategoryOpened = true" class="px-4 py-3 font-medium text-start w-full">Категории</p>
						<NuxtLink to="/promotions" class="px-4 py-3 font-medium text-start w-full">Акции</NuxtLink>
					</nav>
					<TheSeperator class="my-4" />
					<nav class="flex flex-col gap-2">
						<NuxtLink to="/" class="font-normal text-base text-grey-2 px-4 py-3">Офис локация</NuxtLink>
						<NuxtLink to="/" class="font-normal text-base text-grey-2 px-4 py-3">Получить консультация</NuxtLink>
						<NuxtLink to="/" class="font-normal text-base text-grey-2 px-4 py-3">О компания</NuxtLink>
						<a href="/" class="font-normal text-base text-grey-2 px-4 py-3">+998 78 123-15-15</a>
					</nav>
				</div>
				<div class="flex flex-col px-4 pb-4 -z-0 mb-16">
					<button class="flex items-center justify-between gap-2 p-4 bg-grey rounded-tr-xl rounded-tl-xl" @click="openLangModal">
						<div class="flex items-center gap-2">
							<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_412_8785)">
									<rect y="0.5" width="21" height="15" rx="3" fill="#1A47B8" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5H21V15.5H0V10.5Z" fill="#F93939" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21V5.5H0V0.5Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_412_8785">
										<rect y="0.5" width="21" height="15" rx="3" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span class="text-base font-medium">Язык</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-base font-medium">Русский</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path
									d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992"
									stroke="#020105"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</button>
					<TheSeperator />
					<button class="flex items-center justify-between gap-2 p-4 bg-grey rounded-br-xl rounded-bl-xl" @click="openLocationModalOpen">
						<div class="flex items-center gap-2">
							<div class="flex items-center justify-center w-5 h-5 p-[1.667px_2.5px]">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8 17.3334C10.8125 17.3334 15.5 12.1652 15.5 8.07416C15.5 3.98316 12.1421 0.666748 8 0.666748C3.85786 0.666748 0.5 3.98316 0.5 8.07416C0.5 12.1652 5.1875 17.3334 8 17.3334ZM8 10.6667C9.38071 10.6667 10.5 9.54746 10.5 8.16675C10.5 6.78604 9.38071 5.66675 8 5.66675C6.61929 5.66675 5.5 6.78604 5.5 8.16675C5.5 9.54746 6.61929 10.6667 8 10.6667Z"
										fill="#9A999B"
									/>
								</svg>
							</div>
							<span class="text-base font-medium flex-1">Ваш город</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="text-base font-medium flex-1">Ташкент</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path
									d="M11.6667 13.3333L15 9.99992M15 9.99992L11.6667 6.66659M15 9.99992L5 9.99992"
									stroke="#020105"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
		<transition mode="out-in" name="fade">
			<div v-if="isCategoryOpened" class="absolute top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto pb-4 bg-white z-20 transition">
				<div class="flex flex-col gap-6 px-4 mt-6">
					<div class="flex items-center gap-2 -ml-2">
						<button class="text-lg font-medium flex items-center gap-1" @click="isCategoryOpened = false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M14 7.5L10 12.5L14 17.5" stroke="#020105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							Категории
						</button>
					</div>
					<ul class="flex flex-col gap-6">
						<li class="flex items-center gap-4 cursor-pointer" v-for="category in categories" :key="category.id" @click="categoriesSwitched(category.id)">
							<span class="text-sm font-normal text-grey-2">- {{ category.name }}</span>
						</li>
					</ul>
				</div>
			</div>
		</transition>
		<transition mode="out-in" name="fade">
			<div v-if="isCategoryIdVisible" class="absolute top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto pb-4 bg-white z-20 transition">
				<div class="flex flex-col gap-6 px-4 mt-6">
					<div class="flex items-center gap-2 -ml-2">
						<button class="text-lg font-medium flex items-center gap-1" @click="isCategoryIdVisible = false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M14 7.5L10 12.5L14 17.5" stroke="#020105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							{{ categoryWithId.name }}
						</button>
					</div>
					<div class="flex flex-col gap-6">
						<UAccordion color="white" variant="soft" :items="items" :ui="{ default: { class: 'px-0' } }">
							<template #default="{ item, open }">
								<UButton v-if="!item.disabled" variant="ghost" color="white" :ui="{ rounded: 'rounded-none', padding: { sm: 'py-3 px-0' } }">
									<!-- <span class="truncate" @click="open = false; navigateTo(item.to)">{{ item.label }}</span> -->
									<span class="truncate">{{ item.label }}</span>
									<template #trailing>
										<UIcon name="i-heroicons-chevron-right-20-solid" class="w-5 h-5 ms-auto transform transition-transform duration-200" :class="[open && 'rotate-90']" />
									</template>
								</UButton>
								<UButton
									@click="navigateTo(item.to)"
									v-else
									variant="ghost"
									color="white"
									class="!opacity-100"
									:ui="{ rounded: 'rounded-none', padding: { sm: 'py-3 px-0' } }"
									:label="item.label"
								>
								</UButton>
							</template>
							<template #item="{ item }">
								<nav class="flex flex-col gap-4">
									<NuxtLink v-for="subCategory in item.subChildren" :key="subCategory.id" :to="subCategory.to" class="text-sm font-normal text-grey-2"
										>- {{ subCategory.label }}
									</NuxtLink>
								</nav>
							</template>
						</UAccordion>
					</div>
				</div>
			</div>
		</transition>
		<ModalLanguage :isLangModal="isLangModalOpen" @update:isLangModal="handleModalUpdate" />
		<ModalLocation :isLocationModal="isLocationModalOpen" @update:isLocationModal="handleLocationModalUpdate" />
	</div>
</template>

<script setup>
import { useCategories } from '~/stores/categories';
import { useHeader } from '~/stores/header';

const { isCategoryOpened } = storeToRefs(useHeader());
const { categories } = storeToRefs(useCategories());
const isCategoryIdVisible = ref(false);
const categoryWithId = ref(null);

const items = computed(() => [
	...(categoryWithId.value?.children.map((child, idx) => ({
		label: child.name,
		to: `/categories/${child.slug}`,
		defaultOpen: idx === 0 ? true : false,
		subChildren:
			child?.children.map((subChild) => ({
				id: subChild.id,
				label: subChild.name,
				to: `/categories/${subChild.slug}`
			})) || [],
		disabled: child?.children.length === 0
	})) || [])
]);

const categoriesSwitched = (id) => {
	isCategoryIdVisible.value = true;
	categoryWithId.value = categories.value.find((category) => category.id === id);
};

const isLangModalOpen = ref(false);
const isLocationModalOpen = ref(false);

const openLangModal = () => {
	isLangModalOpen.value = true;
};
const openLocationModalOpen = () => {
	isLocationModalOpen.value = true;
};

const handleModalUpdate = (newVal) => {
	isLangModalOpen.value = newVal;
};
const handleLocationModalUpdate = (newVal) => {
	isLocationModalOpen.value = newVal;
};
</script>
<style scoped>
.transition {
	transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
