import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useOrderStore = defineStore('order', () => {
	const loading = ref(false);

	async function postOrder(data) {
		loading.value = true;
		try {
			let res = await useAxios().postRequest(`/order`, data);
			return res.data;
		} catch (error) {
			console.log('error', error);
		} finally {
			loading.value = false;
		}
	}

	return {
		postOrder
	};
});
