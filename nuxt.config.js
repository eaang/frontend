const apiUrl = process.env.API_URL || 'http://localhost:1337'
const siteUrl = process.env.API_URL || 'http://localhost:3000'
const stripeKey = process.env.STRIPE_KEY

export default {
  publicRuntimeConfig: {
    apiUrl: apiUrl,
    siteUrl: siteUrl,
    stripeKey: stripeKey,
  },
  privateRuntimeConfig: {},
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://js.stripe.com/v3' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/auth-next',
    '@nuxtjs/strapi',
    'cookie-universal-nuxt',
  ],

  // Strapi configuration (https://strapi.nuxtjs.org/options)
  strapi: {
    url: apiUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: apiUrl,
  },

  // Auth module configuration (https://auth.nuxtjs.org)
  auth: {
    redirect: {
      login: siteUrl + '/users/login',
    },
    strategies: {
      local: {
        token: {
          property: 'jwt',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
          },
          user: {
            url: 'users/me',
            method: 'get',
          },
          logout: false,
        },
      },
    },
  },

  // Apollo module configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.GRAPHQL_URL || 'http://localhost:1337/graphql',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
