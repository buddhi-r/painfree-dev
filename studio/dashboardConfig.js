export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d9ddc9b8f8e5ee1eaa99c2c',
                  title: 'Sanity Studio',
                  name: 'painfree-dev-studio',
                  apiId: 'e7003549-fd90-4ea0-bc0b-4c03f37cd7c4'
                },
                {
                  buildHookId: '5d9ddc9b8e839ccf7aa62f94',
                  title: 'Landing pages Website',
                  name: 'painfree-dev',
                  apiId: '3639a06f-a324-4a92-ad5c-adb7dc05ba9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/buddhi-r/painfree-dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://painfree-dev.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
