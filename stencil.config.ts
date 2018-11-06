import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  plugins: [sass()],
  copy: [{ src: 'doc-content' }],
  outputTargets: [
    {
      type: 'www',
      dir: '../wu-components/docs'
    }
  ]
}
