module.exports = {
  title: 'Go Land',
  description: 'Go Land - Young Tailors Team',
  base: '/go-lane/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        title: 'Cơ bản',   // required
        children: [ 
          '/guide/hello-world/'
        ]
      }
    ]
  }
}
