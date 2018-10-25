import { buildPlugin } from '@/lib/resources'

export default ({ $axios }, inject) => {
  const plugins = buildPlugin({ client: $axios })

  Object.entries(plugins).forEach(([key, plugin]) => {
    inject(key, plugin)
  })
}
