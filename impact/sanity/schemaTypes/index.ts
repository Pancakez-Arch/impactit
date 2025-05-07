import { type SchemaTypeDefinition } from 'sanity'
import employee from './employee'
import equipment from './equipment'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [employee, equipment, siteSettings],
}
