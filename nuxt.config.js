import webpack from 'webpack'
require('dotenv').config()

let HOST_API_URL = (process.env.LOCAL_ENV === 'true') ? process.env.BASE_API_URL_LOCAL : process.env.BASE_API_URL
let API_URL = `${HOST_API_URL}`

export default {
  target: 'static',
  ssr: false,
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/all.min.css'
      }
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/content',
    'bootstrap-vue/nuxt',
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
  ],
  plugins: [
    '~/plugins/global',
    '~/plugins/coreui-vue',
    '~/plugins/axios',
    '~/plugins/vee-validate'
  ],
  axios: {
    baseURL: API_URL
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: false,
          user: { url: '/users/profile', method: 'get', propertyName: '' }
        }
      },
    }
  },
  bootstrapVue: {
    icons: false 
  },
  moment: {
    /* module options */
  },
  content: {
    // Options
  },
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      //
    }
  }
}