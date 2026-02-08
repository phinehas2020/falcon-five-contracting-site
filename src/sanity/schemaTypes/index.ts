import { type SchemaTypeDefinition } from 'sanity'

import post from '../schemas/post'
import service from '../schemas/service'
import location from '../schemas/location'
import lead from '../schemas/lead'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, service, location, lead],
}
