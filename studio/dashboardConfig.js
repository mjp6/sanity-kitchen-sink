export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd06f9482f2b22c01bbdd0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-31it3vqj',
                  apiId: '15bbbac6-d5ac-47d8-bcb4-e980e3e3fe8b'
                },
                {
                  buildHookId: '5ebd06f9551cb59197dc34ed',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qaehann6',
                  apiId: 'd5309c73-8fa9-40eb-b4c9-e179f61f70c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjp6/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qaehann6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
