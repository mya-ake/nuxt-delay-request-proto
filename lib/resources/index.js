import { Resource } from './models'
import pluginBuilder from './builder/plugin-builder'

const buildResource = client => {
  return new Resource({
    client,
  })
}

export const buildPlugin = ({ client } = {}) => {
  const resources = buildResource(client)
  const ResroucePlugin = pluginBuilder(resources)
  return {
    resources,
    ResroucePlugin,
  }
}
