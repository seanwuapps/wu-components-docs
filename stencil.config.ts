import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 16,
          unitPrecision: 5,
          propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin*', 'padding*'],
          selectorBlackList: ['html', 'body'],
          replace: false,
          mediaQuery: true,
          minPixelValue: 0
        })
      ]
    })
  ],
  copy: [{ src: 'doc-content' }],
  outputTargets: [
    {
      type: 'www',
      dir: '../wu-components/docs'
    }
  ]
}
