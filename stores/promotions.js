import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';

export const usePromotions = defineStore('promotions', () => {
	async function getPromotions() {
		try {
			let res = await useAxios().getRequest(`/promotions`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}
	async function getPromotionsCategoryProducts(slug) {
		try {
			let res = await useAxios().getRequest(`/promotions/${slug}`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	async function getPromotionsProducts() {
		try {
			let res = await useAxios().getRequest(`/promotions/product`);
			return res.data;
		} catch (error) {
			console.log('error', error);
		}
	}

	return {
		getPromotions,
		getPromotionsCategoryProducts,
		getPromotionsProducts
	};
});
