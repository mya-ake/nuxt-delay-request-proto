import Vue from 'vue'

import { buildPlugin } from '<%= options.libSrc %>'

export default ({ $axios }, inject) => {
  if (typeof $axios === 'undefined') {
    throw new Error('Please install `@nuxt/aixos`.')
  }
  const { resources, ResroucePlugin } = buildPlugin({ client: $axios })

  Vue.use(ResroucePlugin)
  inject('_resources', resources)
}
