import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useAuth = defineStore('auth', () => {
	const accessToken = useCookie('access_token');
	const isOpenModal = ref(false);

	const authCheck = async (data) => {
		try {
			let response = await useAxios().postRequest('/auth/check', data);
			console.log(response);
			return response;
		} catch (error) {
			console.log('error', error);
		}
	};

	const verifyCode = async (data) => {
		try {
			let res = await useAxios().postRequest('/auth/register', data);
			accessToken.value = res.data.token;
			return res;
		} catch (error) {
			console.log('error', error);
		}
	};

	const completeProfile = async (data) => {
		try {
			let res = await useAxios().postRequest('/auth/check', data);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	};

	const logout = () => {
		accessToken.value = null;
		navigateTo('/');
	};

	const isAuthenticated = computed(() => {
		return !!accessToken.value;
	});

	const toggleModal = () => {
		isOpenModal.value = !isOpenModal.value;
	};

	return { authCheck, verifyCode, completeProfile, logout, isAuthenticated, toggleModal, isOpenModal };
});
