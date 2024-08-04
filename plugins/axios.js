import axios from 'axios';
import { useAuth } from '~/stores/auth';

export default defineNuxtPlugin((nuxtApp) => {
	const accessToken = useCookie('access_token');
	const authStore = useAuth();

	const { logout } = authStore;

	const axiosInstance = axios.create({
		baseURL: process.env.API_BASE_URL || 'https://verel-auto.uz/api'
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			config.headers['Lang'] = nuxtApp.$i18n.locale.value;
			if (accessToken.value) {
				config.headers['Authorization'] = `Bearer ${accessToken.value}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response && error.response.status === 401) {
				logout();
				navigateTo('/');
			}
			return Promise.reject(error);
		}
	);

	nuxtApp.provide('axios', axiosInstance);
});
