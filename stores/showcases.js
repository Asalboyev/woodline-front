import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useShowcases = defineStore('showcases', () => {
	async function getShowcases() {
		try {
			let res = await useAxios().getRequest(`/showcases`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getShowcases
	};
});
