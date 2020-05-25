/*
 * @Author: shiliangL
 * @Date: 2020-05-23 22:04:03
 * @LastEditTime: 2020-05-23 22:49:38
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'topevery-element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
