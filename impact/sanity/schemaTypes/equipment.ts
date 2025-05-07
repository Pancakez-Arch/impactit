export default {
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    {
      name: 'kategori',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          'Laptop',
          'Skjerm',
          'Nettbrett',
          'Projektor',
          'Kamera',
          'Headset',
          'Mobiltelefon'
        ]
      }
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'modell',
      title: 'Model',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'bilde',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
  preview: {
    select: {
      title: 'modell',
      subtitle: 'kategori',
      media: 'bilde'
    }
  }
}