import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {
	const favorites = useCookie('favorites');

	if (!favorites.value) {
		favorites.value = [];
	}

	const addFavorite = (slug) => {
		favorites.value.push(slug);
	};

	const removeFavorite = (slug) => {
		favorites.value = favorites.value.filter((i) => i !== slug);
	};

	const toggleFavorite = (slug) => {
		if (favorites.value.includes(slug)) {
			removeFavorite(slug);
		} else {
			addFavorite(slug);
		}
	};

	const clearFavorites = () => {
		favorites.value = [];
	};

	return {
		favorites,
		toggleFavorite,
		addFavorite,
		removeFavorite,
		clearFavorites
	};
});
