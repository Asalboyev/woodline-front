<template>
	<UModal v-model="props.isFormModal" :ui="{ base: 'sm:!max-w-[480px]' }">
		<div class="w-full p-8 space-y-6">
			<div class="flex items-start justify-between">
				<div class="space-y-2">
					<h3 class="text-xl font-medium">Введите номер телефона</h3>
					<p class="text-grey-1">Отправим смс с кодом подтверждения</p>
				</div>
				<UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeModal" />
			</div>
			<UForm :validate="validate" :state="state" @submit="loginToSystem" class="flex flex-col gap-6">
				<div class="flex flex-col gap-6">
					<UFormGroup label="Номер телефона" name="phone" v-if="auth_status === 'phone'">
						<UInput
							size="lg"
							:ui="{ rounded: 'lg', padding: { lg: 'px-6 py-4' }, color: { white: { outline: 'shadow-none border-grey-0' } } }"
							v-maska="'+998 (##) ###-##-##'"
							v-model="form.phone"
						>
							<template #trailing>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333Z"
										stroke="#020105"
										stroke-width="1.5"
										stroke-linejoin="round"
									/>
								</svg>
							</template>
						</UInput>
					</UFormGroup>
					<UFormGroup label="Пароль" name="code" v-if="auth_status === 'verify'">
						<UInput
							size="lg"
							:ui="{ padding: { lg: 'px-6 py-4' }, color: { white: { outline: 'shadow-none' } } }"
							class="border-grey-0 rounded-xl"
							v-model="form.code"
							v-maska="'######'"
							placeholder="Введите ваш пароль"
						>
							<template #trailing>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<rect x="3.33331" y="5.8335" width="13.3333" height="11.6667" rx="4" stroke="#020105" stroke-width="1.5" />
									<ellipse cx="9.99998" cy="11.6667" rx="1.66667" ry="1.66667" stroke="#020105" stroke-width="1.5" />
									<path d="M13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333" stroke="#020105" stroke-width="1.5" />
								</svg>
							</template>
						</UInput>
					</UFormGroup>
				</div>
				<!-- <div class="flex flex-col gap-6" v-if="auth_status === 'form'">
					<UFormGroup label="Familyangiz" name="last_name">
						<UInput
							size="lg"
							:ui="{ padding: { lg: 'px-6 py-4' }, color: { white: { outline: 'shadow-none' } } }"
							class="border-grey-0 rounded-xl"
							v-model="form.last_name"
							placeholder="Familyangizni kiriting"
						>
						</UInput>
					</UFormGroup>
					<UFormGroup label="Ismingiz" name="first_name">
						<UInput
							size="lg"
							:ui="{ padding: { lg: 'px-6 py-4' }, color: { white: { outline: 'shadow-none' } } }"
							class="border-grey-0 rounded-xl"
							v-model="form.first_name"
							placeholder="Ismingizni kiriting"
						>
						</UInput>
					</UFormGroup>
					<UFormGroup label="Jinsingiz" name="gender">
						<USelectMenu
							variant="outline"
							size="xl"
							v-model="form.gender"
							:options="['Erkak', 'Ayol']"
							:ui="{
								padding: { xl: 'px-6 py-4' },
								rounded: 'rounded-xl',
								color: {
									white: {
										outline: 'shadow-none ring-grey-0 !placeholder:text-grey-1'
									}
								}
							}"
							:uiMenu="{
								option: {
									padding: 'px-6 py-4'
								}
							}"
							placeholder="Tanlang"
						/>
					</UFormGroup>
				</div> -->
				<UButton
					type="submit"
					size="xl"
					:ui="{ rounded: 'rounded-full', padding: { xl: 'p-4' } }"
					variant="solid"
					class="w-full justify-center"
					:disabled="state.loading"
					:loading="state.loading"
				>
					Войти
				</UButton>
				<UButton
					@click="resendCode"
					size="xl"
					:ui="{ rounded: 'rounded-full', padding: { xl: 'p-4' } }"
					variant="outline"
					class="w-full justify-center"
					:disabled="isResendButtonDisabled"
					v-if="auth_status === 'verify'"
				>
					Отправить код еще раз
					<span class="font-medium">
						{{ countdown }}
					</span>
				</UButton>
			</UForm>
		</div>
	</UModal>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { useAuth } from '~/stores/auth';

const props = defineProps({
	isFormModal: {
		type: Boolean,
		default: false
	}
});
const emit = defineEmits(['update:isFormModal']);

const authStore = useAuth();

const { authCheck, verifyCode } = authStore;

const localFormModal = ref(props.isFormModal);

const auth_status = ref('phone');

// Countdown timer
const countdown = ref(60);
const isResendButtonDisabled = ref(false);
let timer = null;

const state = reactive({
	errors: [],
	loading: false
});

const startCountdown = () => {
	countdown.value = 60;
	isResendButtonDisabled.value = true;
	timer = setInterval(() => {
		if (countdown.value > 0) {
			countdown.value--;
		} else {
			clearInterval(timer);
			isResendButtonDisabled.value = false;
		}
	}, 1000);
};

const form = reactive({
	phone: '+998',
	code: '',
	last_name: '',
	first_name: '',
	gender: '',
	birth_date: ''
});

const closeModal = () => {
	localFormModal.value = false;
	emit('update:isFormModal', false);
};

const validate = () => {
	const errors = [];
	const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
	if (auth_status.value === 'phone') {
		if (!form.phone) errors.push({ path: 'phone', message: 'Telefon raqamni kiriting' });
		if (!phoneRegex.test(form.phone)) errors.push({ path: 'phone', message: "Format to'g'ri ekanligini tekshiring" });
	}
	if (auth_status.value === 'verify') {
		if (!form.code) errors.push({ path: 'code', message: 'Kod kiriting' });
	}
	if (auth_status.value === 'complete') {
		if (!form.last_name) errors.push({ path: 'last_name', message: 'Familyangizni kiriting' });
		if (!form.first_name) errors.push({ path: 'first_name', message: 'Ismingizni kiriting' });
		if (!form.gender) errors.push({ path: 'gender', message: 'Jinsingizni tanlang' });
	}
	state.errors = errors;
	return errors;
};

const formatPhoneNumber = (phone) => {
	return phone.replace(/[^\d]/g, '');
};

const resendCode = () => {
	if (!isResendButtonDisabled.value) {
		sendPhoneNumber();
	}
};

const sendPhoneNumber = async () => {
	state.loading = true;
	try {
		let res = await authCheck({
			phone_number: formatPhoneNumber(form.phone)
		});
		console.log(res);
		if (res.status === 200) {
			auth_status.value = 'verify';
			startCountdown();
		}
	} catch (error) {
		state.errors.push({ path: 'phone', message: 'Telefon raqamni yuborishda xatolik yuz berdi' });
	} finally {
		state.loading = false;
	}
};

const sendVerifyCode = async () => {
	state.loading = true;
	try {
		let res = await verifyCode({
			phone_number: formatPhoneNumber(form.phone),
			sms_code: form.code
		});
		if (res.status === 200) {
			closeModal();
			auth_status.value = 'complete';
		}
	} catch (error) {
		state.errors.push({ path: 'code', message: 'Kodni tasdiqlashda xatolik yuz berdi' });
	} finally {
		state.loading = false;
	}
};

async function loginToSystem() {
	switch (auth_status.value) {
		case 'phone':
			await sendPhoneNumber();
			break;
		case 'verify':
			await sendVerifyCode();
			break;
		default:
			console.error('Invalid auth status');
	}
}

watch(localFormModal, (newVal) => {
	emit('update:isFormModal', newVal);
});

onUnmounted(() => {
	if (timer) {
		clearInterval(timer);
	}
});
</script>
