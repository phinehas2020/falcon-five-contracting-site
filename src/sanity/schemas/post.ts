import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'targetKeyword',
            title: 'Target Keyword',
            type: 'string',
        }),
        defineField({
            name: 'outline',
            title: 'Outline',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
