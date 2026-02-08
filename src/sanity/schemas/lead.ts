import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'lead',
    title: 'Lead',
    type: 'document',
    readOnly: true, // Typically, leads are created via API but read-only in Studio unless intentional
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Closed', value: 'closed' },
                ],
            },
            initialValue: 'new',
        }),
    ],
})
