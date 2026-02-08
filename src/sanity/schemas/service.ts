import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'text',
        }),
        defineField({
            name: 'emergencyChecklist',
            title: 'Emergency Checklist',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'commonProblems',
            title: 'Common Problems',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'relatedKeywords',
            title: 'Related Keywords',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
