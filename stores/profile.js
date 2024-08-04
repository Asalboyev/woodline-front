import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useProfile = defineStore('profile', () => {
	const loading = ref(false);

	const getUser = async () => {
		try {
			let response = await useAxios().getRequest('/profile/me');
			return response.data;
		} catch (error) {
			console.log('error', error);
		}
	};
	const updateProfileUser = async (data) => {
		loading.value = true;
		try {
			let response = await useAxios().putRequest('/profile/update', data);
			return response.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			loading.value = false;
		}
	};
	return { getUser, updateProfileUser, loading };
});
