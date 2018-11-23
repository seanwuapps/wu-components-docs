import { Component, Prop, State } from '@stencil/core'

@Component({
  tag: 'vars-editor'
  // styleUrl: 'vars-editor.css'
})
export class VarsEditor {
  @Prop()
  vars
  @State()
  varList

  componentWillLoad() {
    console.log('asdf', this.vars)
    this.varList = this.vars
  }
  updateVar(key, e) {
    let styles = { ...this.varList }
    styles[key] = e.target.value
    this.varList = styles
    console.log(this.varList)
  }
  render() {
    return (
      <ul>
        {Object.keys(this.varList).map(key => {
          const value = this.varList[key]
          return (
            <li>
              <label htmlFor={key}>{key}</label>
              <input type="text" id={key} value={value} onInput={e => this.updateVar(key, e)} />
            </li>
          )
        })}

        {this.varList}
      </ul>
    )
  }
}
