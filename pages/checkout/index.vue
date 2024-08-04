<template>
	<div>
		<main>
			<div class="wrapper py-20 space-y-20">
				<section>
					<h3 class="text-3xl font-medium">Оформление заказа</h3>

					<div class="mt-4 grid xl:grid-cols-6 gap-6">
						<div class="xl:col-span-4">
							<div class="flex flex-col gap-6">
								<div class="border rounded-xl border-grey-0 p-6">
									<h3 class="text-xl font-medium mb-4">Способ получения и адрес доставки</h3>
									<!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4"> -->
									<UForm ref="orderForm" :validate="validate" :state="state" @submit="checkout" class="flex flex-col gap-6">
										<div class="flex flex-col gap-6">
											<div class="bg-grey p-4 rounded-lg flex flex-col gap-6 cursor-pointer" @click="deliveryTypeSelect('delivery_type_dp')">
												<div class="flex gap-2">
													<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="selectedDeliveryType === 'delivery_type_dp'">
														<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
														<circle cx="16" cy="16" r="5" fill="#089E5F" />
													</svg>

													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" v-else>
														<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
														<circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
													</svg>
													<div class="flex-1">
														<p>Самовывоз Woodline</p>
														<p class="text-sm text-grey-2">г.Ташкент, р.Яшнабадский, ул.Паркент,180</p>
													</div>
												</div>
												<!-- <UButton
														size="xl"
														:ui="{
															padding: { xl: 'p-4' },
															rounded: 'rounded-full'
														}"
														class="text-green bg-white w-full justify-center"
														variant="secondary"
														label="Показать на карте"
													>
														<template #trailing>
															<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
																<path
																	d="M12.5 8C12.5 9.10457 11.6046 10 10.5 10C9.39543 10 8.5 9.10457 8.5 8C8.5 6.89543 9.39543 6 10.5 6C11.6046 6 12.5 6.89543 12.5 8Z"
																	stroke="#089E5F"
																	stroke-width="1.5"
																/>
																<path
																	d="M17.5 7.85714C17.5 10.1415 15.802 12.9966 13.9424 14.9028C12.7191 16.1567 11.4259 17 10.5 17C9.57413 17 8.28087 16.1567 7.05756 14.9028C5.19796 12.9966 3.5 10.1415 3.5 7.85714C3.5 4.07005 6.63401 1 10.5 1C14.366 1 17.5 4.07005 17.5 7.85714Z"
																	stroke="#089E5F"
																	stroke-width="1.5"
																/>
																<path
																	d="M13.6542 15.1895C17.069 15.6154 19.5 16.7131 19.5 18C19.5 19.6569 15.4706 21 10.5 21C5.52944 21 1.5 19.6569 1.5 18C1.5 16.7131 3.93101 15.6154 7.34581 15.1895"
																	stroke="#089E5F"
																	stroke-width="1.5"
																	stroke-linecap="round"
																/>
															</svg>
														</template>
													</UButton> -->
											</div>
											<!-- <div class="bg-grey p-4 rounded-lg cursor-pointer" @click="deliveryTypeSelect('delivery_type_courier')">
													<div class="flex gap-2">
														<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="selectedDeliveryType === 'delivery_type_courier'">
															<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
															<circle cx="16" cy="16" r="5" fill="#089E5F" />
														</svg>

														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" v-else>
															<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
															<circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
														</svg>
														<div class="flex-1">
															<p>Курьером до двери</p>
															<p class="text-sm text-grey-2">Доставим 8 ноября, 30 000 сум</p>
														</div>
													</div>
												</div> -->
										</div>
										<UFormGroup name="first_name">
											<div class="flex flex-col gap-2">
												<p class="text-base font-medium">Ismingiz</p>
												<UInput
													:ui="{
														padding: { xl: 'px-6 py-4' },
														rounded: 'rounded-lg',
														color: {
															white: {
																outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
															}
														}
													}"
													size="xl"
													placeholder="Ismingizni kiriting"
													v-model="form.first_name"
												/>
											</div>
										</UFormGroup>
										<UFormGroup name="last_name">
											<div class="flex flex-col gap-2">
												<p class="text-base font-medium">Familyangiz</p>
												<UInput
													:ui="{
														padding: { xl: 'px-6 py-4' },
														rounded: 'rounded-lg',
														color: {
															white: {
																outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
															}
														}
													}"
													size="xl"
													placeholder="Familyangizni kiriting"
													v-model="form.last_name"
												/>
											</div>
										</UFormGroup>
										<UFormGroup name="phone">
											<div class="flex flex-col gap-2">
												<p class="text-base font-medium">Telefon raqamingiz</p>
												<ClientOnly>
													<UInput
														:ui="{
															padding: { xl: 'px-6 py-4' },
															rounded: 'rounded-lg',
															color: {
																white: {
																	outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
																}
															}
														}"
														size="xl"
														placeholder="Telefon raqamingizni kiriting"
														v-model="form.phone"
														v-maska="'+998 (##) ###-##-##'"
													/>
												</ClientOnly>
											</div>
										</UFormGroup>
										<UFormGroup name="region_id">
											<div class="flex flex-col gap-2">
												<p class="text-base font-medium">Mintaqangiz</p>
												<USelectMenu
													variant="outline"
													v-model="form.region_id"
													value-attribute="id"
													option-attribute="name"
													size="xl"
													:options="data.regions"
													:ui="{
														padding: { xl: 'px-6 py-4' },
														rounded: 'rounded-xl',
														color: {
															white: {
																outline: 'shadow-none ring-grey-0 !placeholder:text-grey-1'
															}
														}
													}"
													placeholder="Mintaqangizni tanlang"
												/>
											</div>
										</UFormGroup>
										<UFormGroup name="district_id">
											<div class="flex flex-col gap-2">
												<p class="text-base font-medium">Shahar yoki tuman</p>
												<USelectMenu
													variant="outline"
													v-model="form.district_id"
													value-attribute="id"
													option-attribute="name"
													size="xl"
													:options="filteredDistricts"
													:ui="{
														padding: { xl: 'px-6 py-4' },
														rounded: 'rounded-xl',
														color: {
															white: {
																outline: 'shadow-none ring-grey-0 !placeholder:text-grey-1'
															}
														}
													}"
													placeholder="Shahar yoki tumanni tanlang"
												/>
											</div>
										</UFormGroup>
									</UForm>
									<!-- <div class="sm:h-[270px] overflow-hidden rounded-2xl">
											<img class="object-cover h-full w-full" src="~/assets/images/png/home-map.png" alt="map" />
										</div> -->
									<!-- </div> -->
								</div>
								<!-- <div class="border rounded-xl border-grey-0 p-6">
									<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
										<div class="bg-grey p-4 rounded-lg flex flex-col gap-2 cursor-pointer" @click="paymentSelect('card_online')">
											<div class="flex gap-2">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="selectedPaymentType === 'card_online'">
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
													<circle cx="16" cy="16" r="5" fill="#089E5F" />
												</svg>

												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" v-else>
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
													<circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
												</svg>

												<div class="flex-1">
													<p>Картой онлайн</p>
													<p class="text-sm text-grey-1 font-normal">UZCARD, HUMO, Visa, MasterCard</p>
												</div>
											</div>
											<div class="flex gap-4">
												<img src="~/assets/images/svg/master-card.svg" />
												<img src="~/assets/images/svg/humo-card.svg" />
												<img src="~/assets/images/svg/uz-card.svg" />
												<img src="~/assets/images/svg/visa-card.svg" />
											</div>
										</div>
										<div class="bg-grey p-4 rounded-lg flex flex-col gap-2 cursor-pointer" @click="paymentSelect('online_payment')">
											<div class="flex gap-2">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="selectedPaymentType === 'online_payment'">
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
													<circle cx="16" cy="16" r="5" fill="#089E5F" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" v-else>
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
													<circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
												</svg>
												<div class="flex-1">
													<p>Онлайн платеж</p>
													<p class="text-sm text-grey-1 font-normal">Payme, Uzum bank, Paynet, Alif mobile</p>
												</div>
											</div>
											<div class="flex gap-4 py-2">
												<div class="flex items-center justify-center w-11 h-7 border-2 border-grey-0 bg-white">
													<img src="~/assets/images/svg/uzum.svg" />
												</div>
												<div class="flex items-center justify-center w-11 h-7 border-2 border-grey-0 bg-white">
													<img src="~/assets/images/svg/payme.svg" />
												</div>
												<div class="flex items-center justify-center w-11 h-7 border-2 border-grey-0 bg-white">
													<img src="~/assets/images/svg/paynet.svg" />
												</div>
												<div class="flex items-center justify-center w-11 h-7 border-2 border-grey-0 bg-white">
													<img src="~/assets/images/svg/alif-mobi.svg" />
												</div>
											</div>
										</div>
										<div class="bg-grey p-4 rounded-lg flex flex-col gap-2 cursor-pointer" @click="paymentSelect('cash_on_delivery')">
											<div class="flex gap-2">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="selectedPaymentType === 'cash_on_delivery'">
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
													<circle cx="16" cy="16" r="5" fill="#089E5F" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" v-else>
													<rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
													<circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
												</svg>
												<div class="flex-1">
													<p>Оплата при получении</p>
													<p class="text-sm text-grey-1 font-normal">Курьеру – только наличными, в пунктах выдачи – наличными и картой</p>
												</div>
											</div>
										</div>
									</div>
								</div> -->
								<!-- <UAccordion color="white" variant="soft" size="sm" class="border rounded-xl border-grey-0 p-6" :ui="{ default: { class: 'mb-0 p-0' } }" :items="items">
									<template #form>
										<div class="grid grid-cols-12 gap-6 mt-6">
											<div class="col-span-6">
												<div class="flex flex-col gap-2">
													<p class="text-base">Ismingiz</p>
													<UInput
														:ui="{
															padding: { xl: 'px-6 py-4' },
															rounded: 'rounded-xl',
															color: {
																white: {
																	outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
																}
															}
														}"
														size="xl"
														placeholder="Ismingizni kiriting"
													/>
												</div>
											</div>
											<div class="col-span-6">
												<div class="flex flex-col gap-2">
													<p class="text-base">Elektron pochtangiz</p>
													<UInput
														:ui="{
															padding: { xl: 'px-6 py-4' },
															rounded: 'rounded-xl',
															color: {
																white: {
																	outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
																}
															}
														}"
														size="xl"
														placeholder=" Elektron pochtangizni kiriting"
													/>
												</div>
											</div>
											<div class="col-span-12">
												<div class="flex flex-col gap-2">
													<p class="text-base">Elektron pochtangiz</p>
													<UTextarea
														:ui="{
															padding: { xl: 'px-6 py-4' },
															rounded: 'rounded-xl',
															color: {
																white: {
																	outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
																}
															}
														}"
														size="xl"
														placeholder=" Elektron pochtangizni kiriting"
													/>
												</div>
											</div>
										</div>
									</template>
								</UAccordion> -->
							</div>
						</div>
						<div class="xl:col-span-2">
							<div class="border rounded-xl border-grey-0 p-6">
								<div class="flex flex-col gap-6">
									<div class="flex items-center justify-between">
										<h3 class="text-xl font-medium">Ваш заказ</h3>
										<NuxtLink to="/cart" class="underline text-grey-1">Перейти в корзину</NuxtLink>
									</div>
									<TheSeperator />
									<div class="flex flex-col gap-6">
										<div class="flex items-center justify-between">
											<p>Товары, {{ carts.length }} шт</p>
											<p>{{ formatNumber(totalPrice) }} сум</p>
										</div>
										<div class="flex items-center justify-between">
											<p>Доставка:</p>
											<p>10 200 000 сум</p>
										</div>
										<div class="flex items-center justify-between">
											<p>Общий:</p>
											<h3 class="text-xl font-medium">{{ formatNumber(totalPrice) }} сум</h3>
										</div>
									</div>
									<UButton
										@click="submitOrderForm"
										size="xl"
										:ui="{
											padding: { xl: 'px-6 py-4' },
											rounded: 'rounded-full',
											icon: { size: { xl: 'h-5 w-5' } }
										}"
										class="justify-center"
										label="Перейти к оплате"
									>
									</UButton>
								</div>
							</div>
							<UAccordion class="border rounded-xl border-grey-0 mt-6 p-4" :ui="{ default: { class: 'mb-0 p-0' } }" color="white" variant="soft" size="sm" :items="order">
								<template #order>
									<TheSeperator class="my-4" />
									<div class="flex flex-col gap-4">
										<div class="flex items-center gap-4" v-for="(item, i) in carts" :key="i">
											<div class="w-24 h-28 border border-grey-0 rounded-lg overflow-hidden">
												<img class="h-full w-full object-contain" :src="item.images[0].lg_img" alt="chair" />
											</div>
											<div class="flex flex-col gap-2">
												<h3>{{ item.name }}</h3>
												<p class="text-grey-1">
													Количество:
													<span class="text-black me-2"> {{ item.quantity }} </span>
												</p>
												<p>{{ formatNumber(item.real_price) }} сум</p>
											</div>
										</div>
									</div>
								</template>
							</UAccordion>
						</div>
					</div>
				</section>
			</div>
		</main>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCommon } from '~/stores/common.js';
import { useCartStore } from '~/stores/cart';
import { useOrderStore } from '~/stores/order.js';
import { useAuth } from '~/stores/auth.js';

const items = [
	{
		label: 'Дополнительная информация',
		defaultOpen: true,
		slot: 'form'
	}
];
const order = [
	{
		label: 'Ваш заказ',
		defaultOpen: true,
		slot: 'order'
	}
];

const form = reactive({
	first_name: '',
	last_name: '',
	phone: '',
	region_id: null,
	district_id: null
});

const state = reactive({
	errors: [],
	loading: false
});

const orderForm = ref(null);
const selectedDeliveryType = ref('delivery_type_dp');
const selectedPaymentType = ref('online_payment');

const commonStore = useCommon();
const cartStore = useCartStore();
const orderStore = useOrderStore();
const authStore = useAuth();

const { getRegions } = commonStore;
const { postOrder } = orderStore;
const { toggleModal } = authStore;
const { isAuthenticated } = storeToRefs(authStore);

const { carts, totalPrice } = storeToRefs(cartStore);

// const paymentSelect = (paymentType) => {
// 	selectedPaymentType.value = paymentType;
// };

const deliveryTypeSelect = (deliveryType) => {
	selectedDeliveryType.value = deliveryType;
};

const filteredDistricts = computed(() => {
	if (!form.region_id) return [];
	const selectedRegion = data.value.regions.find((reg) => reg.id === form.region_id);
	return selectedRegion ? selectedRegion.districts : [];
});

const products = computed(() =>
	carts.value.map((item) => ({
		product_id: item.id,
		count: item.quantity,
		pric: item.price
	}))
);

function validate() {
	const errors = [];
	if (!form.first_name) errors.push({ path: 'first_name', message: 'Ismingizni kiriting' });
	if (!form.last_name) errors.push({ path: 'last_name', message: 'Familyangizni kiriting' });
	if (!form.phone) errors.push({ path: 'phone', message: 'Telefon raqamingizni kiriting' });
	if (!form.region_id) errors.push({ path: 'region_id', message: 'Hududni tanlang' });
	if (!form.district_id) errors.push({ path: 'district_id', message: 'Tumanni tanlang' });
	return errors;
}

const submitOrderForm = () => {
	if (orderForm.value) {
		orderForm.value.submit();
	}
};

function extractNumbers(phone) {
	return phone.replace(/\D/g, '');
}

const checkout = () => {
	if (!isAuthenticated.value) {
		toggleModal();
		return;
	}
	postOrder({
		delivery_method: 'courier',
		name: form.first_name,
		surname: form.last_name,
		phone_number: extractNumbers(form.phone),
		region_id: form.region_id,
		district_id: form.district_id,
		address: null,
		user_address_id: 1,
		postcode: null,
		email: null,
		comments: null,
		payment_method: 'click',
		products: products.value,
		amount: totalPrice.value,
		dicoin: null
	});
};

watch(form.region_id, () => {
	form.district_id = null;
});

const { data } = await useAsyncData('regions', async () => {
	return await getRegions();
});
</script>
