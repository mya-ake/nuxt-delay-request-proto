import Vue from 'vue'

import { buildPlugin } from '@/lib/resources'

export default ({ app, $axios }, inject) => {
  const { router } = app
  const { resources, ResroucePlugin } = buildPlugin({ client: $axios })

  Vue.use(ResroucePlugin)
  inject('_resources', resources)
}
