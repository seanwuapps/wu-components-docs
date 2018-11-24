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

  @State()
  css: string
  componentWillLoad() {
    this.variableList = JSON.parse(this.vars)
    this.css = ':root' + this.vars.replace('"', '')
  }

  updateVar(key, e) {
    let styles = { ...this.variableList }
    styles[key] = e.target.value
    this.variableList = styles
    this.css = ':root' + this.variableList.replace('"', '')
  }

  render() {
    return (
      <div>
        <h2>CSS Variables</h2>
        <div>
          {Object.keys(this.variableList).map(key => {
            if (key === 'elm') {
              return
            }
            const value = this.variableList[key]
            return (
              <wu-row>
                <wu-col />
                <wu-col>
                  <label htmlFor={key}>{key}</label>
                </wu-col>
                <wu-col>
                  <input type="text" id={key} value={value} onInput={e => this.updateVar(key, e)} />
                </wu-col>
                <wu-col />
              </wu-row>
            )
          })}
        </div>
        <h3>CSS Code</h3>
        <code-block code={this.css} />
        <h3>Preview</h3>
        <div innerHTML={this.code} style={this.variableList} />
      </div>
    )
  }
}
