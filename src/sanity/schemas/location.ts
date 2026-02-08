import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'city',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'region',
            title: 'Region',
            type: 'string',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
        }),
        defineField({
            name: 'neighborhoods',
            title: 'Neighborhoods',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'nearby',
            title: 'Nearby Locations',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
