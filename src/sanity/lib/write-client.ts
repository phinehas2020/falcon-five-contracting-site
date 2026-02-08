import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn, // Usually false for writes
    token: process.env.SANITY_API_TOKEN,
    perspective: 'published',
})
