// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,
    css: [
        '~/assets/styles/main.scss',
    ],
    modules: [
        'nuxt-icon',
        '@pinia/nuxt',
    ],
    icon:{
        mode: 'svg'
    },
    import: {
        dirs: [
            'stores',
        ],
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:1337',
            appURL: process.env.APP_URL || 'http://localhost:3000',
            solanaRPC: process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "~/assets/styles/variables.sass"\nbody\n\tmargin: 0',
                },
            },
        },
    },
})
