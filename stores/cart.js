import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore(
	'carts',

	() => {
		const carts = ref([]);

		const getDefaultQuantity = (stock) => {
			return stock > 0 ? 1 : 0;
		};

		const addCart = (data) => {
			const quantity = getDefaultQuantity(data.stock);
			carts.value.push({ ...data, quantity });
		};

		const removeCart = (data) => {
			carts.value = carts.value?.filter((product) => product.id !== data.id);
		};

		const toggleCart = (data) => {
			const exists = carts.value?.some((product) => product.id === data.id);
			if (exists) {
				removeCart(data);
			} else {
				addCart(data);
			}
		};
		const increment = (data) => {
			const product = carts.value.find((product) => product.id === data.id);
			if (product && product.stock > product.quantity) {
				product.quantity++;
			}
		};

		const decrement = (data) => {
			const product = carts.value?.find((product) => product.id === data.id);
			if (product) {
				product.quantity--;
				if (product.quantity <= 0) {
					removeCart(product);
				}
			}
		};
		const totalPrice = computed(() => {
			return carts.value.reduce((total, product) => {
				return total + product.real_price * product.quantity;
			}, 0);
		});

		const clearCarts = () => {
			carts.value = [];
		};

		return {
			carts,
			toggleCart,
			addCart,
			removeCart,
			clearCarts,
			increment,
			decrement,
			totalPrice
		};
	},
	{
		persist: {
			storage: persistedState.localStorage
		}
	}
);
