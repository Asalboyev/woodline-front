<script setup>
import { ref, reactive } from 'vue';
import { useAuth } from '~/stores/auth';
import { useProfile } from '~/stores/profile';

const logoutModal = ref(false);

const profileStore = useProfile();
const authStore = useAuth();

const { getUser, updateProfileUser } = profileStore;
const { logout } = authStore;

const { loading } = storeToRefs(profileStore);

function cleanLogin(login) {
	return login.replace(/\D/g, '');
}

const state = reactive({
	errors: [],
	loading: false
});

const user = ref({
	name: '',
	surname: '',
	email: '',
	login: '',
	gender: ''
});

const handleLogout = () => {
	logout();
	logoutModal.value = false;
};
function validate() {
	const errors = [];
	const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
	const emailRegex = /^[^\s@]+@gmail\.com$/;

	if (!phoneRegex.test(user.value.login)) {
		errors.push({ path: 'login', message: 'Telefon raqamni to`g`ri formatda kiriting' });
	}
	if (!user.value.login) {
		errors.push({ path: 'login', message: 'Telefon raqamni kiriting' });
	}
	if (!user.value.name) {
		errors.push({ path: 'name', message: 'Ismingizni kiriting' });
	}
	if (!user.value.surname) {
		errors.push({ path: 'surname', message: 'Familiyangizni kiriting' });
	}
	if (!user.value.email || !emailRegex.test(user.value.email)) {
		errors.push({ path: 'email', message: 'Emailni to`g`ri formatda kiriting' });
	}
	if (!user.value.gender) {
		errors.push({ path: 'gender', message: 'Jinsingizni tanlang' });
	}
	state.errors = errors;
	return errors;
}

async function updateProfile() {
	updateProfileUser({
		name: user.value.name,
		surname: user.value.surname,
		email: user.value.email,
		gender: user.value.gender,
		login: cleanLogin(user.value.login)
	});
}

const { data } = await useAsyncData('profile', async () => {
	return await getUser();
});

if (data.value) {
	user.value.name = data.value.user.name || '';
	user.value.surname = data.value.user.surname || '';
	user.value.email = data.value.user.email || '';
	user.value.gender = data.value.user.gender || '';
	user.value.login = data.value.user.login || '';
}
</script>
<template>
	<main>
		<div class="wrapper py-20 space-y-20">
			<section class="space-y-10">
				<h3 class="text-3xl font-medium">Baxtjon</h3>
				<div class="flex items-center justify-between flex-wrap gap-4">
					<div class="flex gap-2 rounded-full bg-grey p-2">
						<UButton
							to="/profile"
							size="xl"
							:ui="{
								padding: { xl: 'sm:p-4' },
								rounded: 'rounded-full'
							}"
							class="text-base text-white"
							variant="solid"
							label="Профиль"
						>
							<template #leading>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<ellipse opacity="0.4" cx="12" cy="17" rx="7" ry="4" fill="white" />
									<circle cx="12" cy="7" r="4" fill="white" />
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
							class="text-base text-grey-2 bg-white"
							variant="secondary"
							label="Мои заказы"
						>
							<template #leading>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
										stroke="#5D5D5F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" stroke="#5D5D5F" stroke-width="1.5" />
									<path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" stroke="#5D5D5F" stroke-width="1.5" />
									<path d="M11 8.5H17" stroke="#5D5D5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M11 12.5H17" stroke="#5D5D5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
						@click="logoutModal = true"
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
				<div class="flex flex-col gap-6">
					<UForm :validate="validate" :state="state" @submit="updateProfile" class="flex flex-col gap-6">
						<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							<div class="flex flex-col gap-2">
								<UFormGroup label="Familyangizni kiriting" name="surname">
									<UInput
										:ui="{
											padding: { xl: 'sm:px-6 sm:py-4' },
											rounded: 'rounded-xl',
											color: {
												white: {
													outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
												}
											}
										}"
										size="xl"
										placeholder="Familyangizni kiriting"
										v-model="user.surname"
									/>
								</UFormGroup>
							</div>
							<div class="flex flex-col gap-2">
								<UFormGroup label="Ismingiz" name="name">
									<UInput
										:ui="{
											padding: { xl: 'sm:px-6 sm:py-4' },
											rounded: 'rounded-xl',
											color: {
												white: {
													outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
												}
											}
										}"
										size="xl"
										placeholder="Ismingizni kiriting"
										v-model="user.name"
									/>
								</UFormGroup>
							</div>
							<div class="flex flex-col gap-2">
								<UFormGroup label="Jinsingiz" name="gender">
									<USelectMenu
										variant="outline"
										size="xl"
										v-model="user.gender"
										:options="['Erkak', 'Ayol']"
										:ui="{
											padding: { xl: 'sm:px-6 sm:py-4' },
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
							</div>
							<div class="flex flex-col gap-2">
								<UFormGroup label="Elektron pochtangiz" name="email">
									<UInput
										:ui="{
											padding: { xl: 'sm:px-6 sm:py-4' },
											rounded: 'rounded-xl',
											color: {
												white: {
													outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
												}
											}
										}"
										size="xl"
										placeholder="Elektron pochtangizni kiriting"
										v-model="user.email"
									/>
								</UFormGroup>
							</div>
							<div class="flex flex-col gap-2">
								<UFormGroup label="Telefon raqamingiz" name="login">
									<ClientOnly>
										<UInput
											:ui="{
												padding: { xl: 'sm:px-6 sm:py-4' },
												rounded: 'rounded-xl',
												color: {
													white: {
														outline: 'shadow-none ring-grey-0 placeholder:text-grey-1'
													}
												}
											}"
											size="xl"
											placeholder="+998 99 861 26 34"
											v-maska="'+998 (##) ###-##-##'"
											v-model="user.login"
										/>
									</ClientOnly>
								</UFormGroup>
							</div>
						</div>
						<div class="flex justify-end mt-10">
							<UButton
								type="submit"
								size="xl"
								:ui="{
									padding: { xl: ' sm:p-4' },
									rounded: 'rounded-full'
								}"
								class="text-base w-[160px] flex justify-center"
								label="Saqlash"
								:disabled="loading"
								:loading="loading"
							/>
						</div>
					</UForm>
				</div>
			</section>
			<UModal v-model="logoutModal" :ui="{ base: 'sm:!max-w-[460px]' }">
				<div class="p-4 sm:p-6 flex flex-col gap-10">
					<div class="flex items-center justify-between">
						<h3 class="text-xl font-medium flex-1">Хотите выйти из аккаунта?</h3>
						<UButton color="gray" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="logoutModal = false" />
					</div>
					<div class="flex gap-4 sm:gap-6 justify-between">
						<UButton
							@click="logoutModal = false"
							label="Нет"
							class="text-grey-2 bg-grey flex-1 items-center justify-center"
							color="grey"
							size="xl"
							:ui="{ rounded: 'rounded-full', padding: { xl: 'p-4' } }"
						/>
						<UButton @click="handleLogout" label="ДА" class="flex-1 items-center justify-center" size="xl" :ui="{ rounded: 'rounded-full', padding: { xl: 'p-4' } }" />
					</div>
				</div>
			</UModal>
		</div>
	</main>
</template>
