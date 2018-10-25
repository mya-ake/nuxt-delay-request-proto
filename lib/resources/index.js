import { Resource } from './models'

const buildResource = client => {
  return new Resource({
    client,
  })
}

export const buildPlugin = ({ client } = {}) => {
  return {
    _resources: buildResource(client),
  }
}
