import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const useCategories = defineStore('categories', () => {
	// Categories
	const categories = ref(null);
	const category = ref(null);

	async function getCategories() {
		try {
			let res = await useAxios().getRequest('/categories');
			categories.value = res.data.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	async function getCategory(url, query = null) {
		try {
			let res = await useAxios().getRequest(`/categories/${url}`, query);
			category.value = res.data;
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getCategories,
		categories,
		getCategory,
		category
	};
});
