export function useAxios() {
	const { $axios } = useNuxtApp();

	async function getRequest(url, params) {
		try {
			let res = await $axios.get(url, { params });
			return res;
		} catch (error) {
			handleError(error);
		}
	}

	async function postRequest(url, body) {
		try {
			let res = await $axios.post(url, body);
			return res;
		} catch (error) {
			handleError(error);
		}
	}

	async function putRequest(url, body) {
		try {
			let res = await $axios.put(url, body);
			return res;
		} catch (error) {
			handleError(error);
		}
	}

	async function patchRequest(url, body) {
		try {
			let res = await $axios.patch(url, body);
			return res;
		} catch (error) {
			handleError(error);
		}
	}

	function handleError(error) {
		showError({
			statusCode: error.response?.status || 404,
			fatal: true,
			message: error.message || 'Error'
		});
	}

	return {
		getRequest,
		postRequest,
		putRequest,
		patchRequest
	};
}
