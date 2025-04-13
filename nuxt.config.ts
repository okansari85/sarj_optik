// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  css: [
    '@/assets/css/critical.css',
    '@/assets/css/slick.min.css',
    '@/assets/css/bootstrap-grid.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/style.css',
    '@/assets/css/preloader.css', 
  ],
  app: {
    head: {
      title: 'Quadex',
      htmlAttrs: {
        lang: 'tr', // Burada 'tr' dilini belirliyoruz
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: '' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'
        }
      ],
      script: [
        // CDN ile gelen scriptler
        { src: 'https://code.jquery.com/jquery-2.2.4.min.js', body: true },
        { src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js', body: true },
        { src: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js', body: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js', body: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js', body: true },

        // Projendeki static/js içindeki dosyalar
        { src: '/js/slick.min.js', body: true },
        { src: '/js/scripts.js', body: true }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true,
  vite: {
    plugins: [
      svgLoader({
       // Your settings.
      }),
    ],
  },
})
