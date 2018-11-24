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
  css: string = ''
  componentWillLoad() {
    this.variableList = JSON.parse(this.vars)
    this.css = this.toCssString(this.variableList)
  }

  toCssString(styles) {
    let str = ':root {\n'
    Object.keys(styles).map(key => {
      if (key === 'elm') {
        return
      }
      const value = styles[key]
      str += `  ${key}: ${value};\n`
    })
    str += '}'
    return str
  }

  updateVar(key, e) {
    console.log(e)
    let styles = { ...this.variableList }
    styles[key] = e.target.value

    console.log(styles)
    this.variableList = styles
    this.css = this.toCssString(styles)
    console.log(this.css)
  }

  render() {
    return (
      <div>
        <h2>CSS Variables</h2>
        <wu-row>
          <wu-col portion="2">
            <div>
              {this.variableList}
              {Object.keys(this.variableList).map(key => {
                if (key === 'elm') {
                  return
                }
                const value = this.variableList[key]
                return (
                  <wu-row>
                    <wu-col>
                      <label htmlFor={key}>{key}</label>
                    </wu-col>
                    <wu-col>
                      <input type="text" id={key} value={value} onInput={e => this.updateVar(key, e)} />
                    </wu-col>
                  </wu-row>
                )
              })}
            </div>
          </wu-col>
          <wu-col portion="3">
            <wu-row>
              <wu-col>
                <textarea readonly={true}>{this.css}</textarea>
              </wu-col>
            </wu-row>
          </wu-col>
        </wu-row>

        <h3>Preview</h3>
        <div innerHTML={this.code} style={this.variableList} />
      </div>
    )
  }
}
