import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useSearchStore = defineStore('search', () => {
	async function getSearch(search) {
		try {
			let res = await useAxios().getRequest(`/search?search=${search}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getSearch
	};
});
