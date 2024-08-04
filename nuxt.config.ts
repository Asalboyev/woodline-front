// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/svg',
					href: '/favicon.svg'
				}
			]
		},
		pageTransition: { name: 'fade', mode: 'out-in' }
	},
	modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        '@nuxtjs/google-fonts',
        "@nuxtjs/leaflet"
    ],
	css: ['~/assets/css/main.css'],

	colorMode: {
		preference: 'light'
	},
	googleFonts: {
		families: {
			'Golos Text': '400..900'
		}
	},
	i18n: {
		strategy: 'prefix_except_default',
		locales: ['en', 'uz', 'ru'],
		defaultLocale: 'ru',
		vueI18n: './i18n.config.ts'
	},

	build: {
		transpile: ['@yeger/vue-masonry-wall']
	}
});