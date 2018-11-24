import { Component, Prop, Element } from '@stencil/core'
import hljs from 'highlight.js'

@Component({
  tag: 'code-block',
  styleUrls: ['vars.css', 'code-block.scss', '../../../node_modules/highlight.js/styles/github.css']
})
export class CodeBlock {
  @Prop()
  language: string = 'html'
  @Prop()
  code: string = ''
  @Prop()
  options?: any

  @Element()
  el: HTMLElement

  componentDidLoad() {
    hljs.configure(this.options)
    hljs.highlightBlock(this.el.querySelector('pre'))
  }

  render() {
    return (
      <div>
        <pre>
          <code class={this.language}>{this.code ? this.code.trim() : <slot />}</code>
        </pre>
      </div>
    )
  }
}
