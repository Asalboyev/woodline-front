<script setup>
import { useProfile } from '~/stores/profile';

const profileStore = useProfile();

const { getUser } = profileStore;

const items = [
	{
		label: '2 товара',
		defaultOpen: true,
		content: ''
	}
];
const isReviewModal = ref(false);

const { data: profile } = await useAsyncData('profile', async () => {
	return await getUser();
});
</script>

<template>
	<main>
		<div class="wrapper py-20 space-y-20">
			<section class="space-y-10">
				<h3 class="text-3xl font-medium">
					{{ profile.user.orders[0].name }}
				</h3>
				<div class="flex flex-wrap gap-4 items-center justify-between">
					<div class="flex gap-2 rounded-full bg-grey p-2">
						<UButton
							to="/profile"
							size="xl"
							:ui="{
								padding: { xl: 'sm:p-4' },
								rounded: 'rounded-full'
							}"
							class="text-base text-grey-2 bg-white"
							variant="secondary"
							label="Профиль"
						>
							<template #leading>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<ellipse cx="12" cy="17.5" rx="7" ry="3.5" stroke="#5D5D5F" stroke-width="1.5" stroke-linejoin="round" />
									<circle cx="12" cy="7" r="4" stroke="#5D5D5F" stroke-width="1.5" stroke-linejoin="round" />
								</svg>
							</template>
						</UButton>
						<UButton
							to="/profile/orders"
							size="xl"
							:ui="{
								padding: { xl: 'sm:p-4' },
								rounded: 'rounded-full'
							}"
							class="text-base text-white"
							variant="solid"
							label="Мои заказы"
						>
							<template #leading>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.4" d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4Z" fill="white" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M2.75 1.25C2.33579 1.25 2 1.58579 2 2C2 2.41421 2.33579 2.75 2.75 2.75H4.75C5.44036 2.75 6 3.30964 6 4H7.5C7.5 2.48122 6.26878 1.25 4.75 1.25H2.75Z"
										fill="white"
									/>
									<circle cx="9.5" cy="20.5" r="1.5" fill="white" stroke="white" stroke-width="1.5" />
									<circle cx="18.5" cy="20.5" r="1.5" fill="white" stroke="white" stroke-width="1.5" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.25 8.5C10.25 8.08579 10.5858 7.75 11 7.75H17C17.4142 7.75 17.75 8.08579 17.75 8.5C17.75 8.91421 17.4142 9.25 17 9.25H11C10.5858 9.25 10.25 8.91421 10.25 8.5Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.25 12.5C10.25 12.0858 10.5858 11.75 11 11.75H17C17.4142 11.75 17.75 12.0858 17.75 12.5C17.75 12.9142 17.4142 13.25 17 13.25H11C10.5858 13.25 10.25 12.9142 10.25 12.5Z"
										fill="white"
									/>
								</svg>
							</template>
						</UButton>
					</div>
					<UButton
						size="xl"
						:ui="{
							padding: { xl: 'sm:py-4 sm:px-6' },
							rounded: 'rounded-full'
						}"
						color="grey"
						class="text-base border-2 border-grey-0"
						variant="soft"
						label="Выйти"
					>
						<template #leading>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M15 10.2664L13.7071 11.5593C13.3166 11.9498 13.3166 12.5829 13.7071 12.9735L15 14.2664M14 12.2664L20 12.2664M4 17.2663V7.26633M16 17.2663C16 18.3709 15.1046 19.2663 14 19.2663H10M16 7.26633C16 6.16176 15.1046 5.26633 14 5.26633H10M4.8906 19.8601L6.8906 21.1934C8.21971 22.0795 10 21.1267 10 19.5293V5.00336C10 3.40597 8.21971 2.45319 6.8906 3.33926L4.8906 4.6726C4.3342 5.04353 4 5.66799 4 6.3367V18.196C4 18.8647 4.3342 19.4891 4.8906 19.8601Z"
									stroke="#353437"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
							</svg>
						</template>
					</UButton>
				</div>
			</section>
			<section>
				<div class="flex flex-col mx-auto gap-6 max-w-[952px]">
					<div class="flex flex-col border rounded-lg p-2 sm:p-6 gap-6">
						<div class="flex items-start justify-between gap-6">
							<div class="flex flex-col gap-2 flex-1">
								<h3 class="text-lg sm:text-xl font-medium">ID заказа 23583355</h3>
								<p class="text-xs sm:text-sm text-grey-2">Обновлен 8 ноября 2022 г., 13:00</p>
							</div>
							<div class="flex items-center justify-center bg-[#FFF8F1] rounded-xl text-orange font-medium py-2 px-2 text-xs sm:px-6">Ожидание модерации</div>
						</div>
						<TheSeperator />
						<div class="flex flex-col gap-4">
							<div class="flex items-end gap-4">
								<span class="text-grey-1">Дата заказа</span>
								<TheSeperator class="flex-1" />
								<span class="">8 ноября 2022 г, 12:59</span>
							</div>
							<div class="flex items-end gap-4">
								<span class="text-grey-1">Способ доставки Доствака </span>
								<TheSeperator class="flex-1" />
								<span class="">Доствака </span>
							</div>
							<div class="flex items-end gap-4">
								<span class="text-grey-1">Способ оплаты Payme</span>
								<TheSeperator class="flex-1" />
								<span class="">8 ноября 2022 г, 12:59</span>
							</div>
							<div class="flex items-end gap-4">
								<span class="text-grey-1">Сумма заказа 250 000 сум</span>
								<TheSeperator class="flex-1" />
								<span class="">8 ноября 2022 г, 12:59</span>
							</div>
						</div>
						<TheSeperator />
						<UAccordion color="white" variant="soft" size="sm" :items="items">
							<template #item>
								<div class="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2 border-b pb-6 mb-6 border-grey-0 last:border-none" v-for="(item, i) in profile.user.orders[0].products" :key="i">
									<div class="w-20 h-24 border border-grey-0 rounded-lg overflow-hidden flex items-center justify-center">
										<img class="h-full w-full object-contain flex-shrink-0" src="~/assets/images/png/chair.png" alt="chair" />
									</div>
									<div class="flex flex-col gap-4 flex-1">
										<div class="flex items-center justify-between">
											<h3 class="text-base sm:text-xl flex-1">Кресло офисное IMORY черный</h3>
											<UButton
												size="xl"
												:ui="{
													padding: { xl: 'p-0 sm:p-2' },
													rounded: 'rounded-full'
												}"
												class="hover:bg-transparent text-green"
												variant="ghost"
												label="Оставить отзыв"
												@click="isReviewModal = true"
											>
											</UButton>
										</div>
										<div class="flex items-center justify-between">
											<div class="flex items-center gap-2">
												<span class="text-grey-header">{{ item.count }}x</span>
												<p>{{ item.price }} сум</p>
											</div>
											<p>{{ item.price * item.count }} сум</p>
										</div>
									</div>
								</div>
							</template>
						</UAccordion>
					</div>
				</div>
			</section>
			<UModal v-model="isReviewModal" :ui="{ base: 'sm:!max-w-[700px]' }">
				<div class="flex flex-col gap-6 p-6">
					<div class="flex items-center justify-between">
						<h3 class="text-xl font-medium">Мой отзыв</h3>
						<UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isReviewModal = false" />
					</div>
					<UTextarea
						:ui="{
							padding: { xl: '!px-6 !py-4' },
							rounded: 'rounded-lg',
							color: {
								white: {
									outline: 'shadow-none ring-grey-0 placeholder:text-grey-1 border-grey-0'
								}
							}
						}"
						resize
						placeholder="Напишите отзыв"
					/>
					<div class="flex items-center justify-between">
						<div class="flex flex-col gap-2">
							<span class="text-grey-1">Общая оценка</span>
							<TheRate />
						</div>
						<UButton @click="isMenuOpen = !isMenuOpen" size="xl" :ui="{ padding: { xl: 'px-6 py-3' }, rounded: 'rounded-full' }" variant="solid" label="Готово" class="w-[196px] justify-center" />
					</div>
				</div>
			</UModal>
		</div>
	</main>
</template>
