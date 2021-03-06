module.exports = {
  title: 'Golang',
  description: 'Golang - Young Tailors Team',
  base: '/go-lane/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        title: 'Cơ bản',   // required
        children: [ 
          '/guide/hello-world/',
          '/guide/values/',
          '/guide/variables/',
          '/guide/constants/',
          '/guide/for/',
          '/guide/if-else/',
          '/guide/switch/',
          '/guide/arrays/',
          '/guide/slices/',
        ]
      }
    ]
  }
}
