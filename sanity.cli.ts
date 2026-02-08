/**
 * This configuration file is used to run sanity studio locally (sanity start) in Next.js 13+ app directory environment.
 * It is not used/required for the hosted studio deployed to Vercel.
 */
import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './src/sanity/env'

export default defineCliConfig({ api: { projectId, dataset } })
