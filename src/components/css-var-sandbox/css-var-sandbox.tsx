import { Component, Prop, State } from '@stencil/core'

@Component({
  tag: 'css-var-sandbox',
  styleUrl: 'css-var-sandbox.scss'
})
export class CssVarSandbox {
  @Prop()
  code: string
  @Prop()
  vars: string
  @State()
  variableList: any

  render() {
    return (
      <div>
        <h2>CSS Variables</h2>
        <vars-editor vars={this.vars} />
        <div innerHTML={this.code} style={this.variableList} />
      </div>
    )
  }
}
