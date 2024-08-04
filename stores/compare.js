import { defineStore } from 'pinia';

export const useCompareStore = defineStore('compares', () => {
	const compares = useCookie('compares');

	if (!compares.value) {
		compares.value = [];
	}

	const addCompare = (slug) => {
		compares.value.push(slug);
	};

	const removeCompare = (slug) => {
		compares.value = compares.value.filter((i) => i !== slug);
	};

	const toggleCompare = (slug) => {
		if (compares.value.includes(slug)) {
			removeCompare(slug);
		} else {
			addCompare(slug);
		}
	};

	const clearCompares = () => {
		compares.value = [];
	};

	return {
		compares,
		toggleCompare,
		addCompare,
		removeCompare,
		clearCompares
	};
});
