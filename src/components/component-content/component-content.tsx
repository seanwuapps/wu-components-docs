import { Component, Prop, Watch, State } from '@stencil/core'

@Component({
  tag: 'component-content',
  styleUrl: 'component-content.scss'
})
export class ComponentContent {
  @Prop()
  name: string
  @State()
  isLoading: boolean = true

  @State()
  documentContent: string = ''

  @State()
  errorMsg: string = ''
  LOADING_TIMEOUT: number = 10000
  timeoutCounter: any

  componentWillLoad() {
    this.fetchContent()
  }

  @Watch('name')
  fetchContent() {
    this.startLoading()
    return fetch(`/doc-content/${this.name}.html`)
      .then(res => {
        if (res.ok) {
          return res.text()
        }
      })
      .then(res => (this.documentContent = res))
      .then(() => (this.isLoading = false))
      .catch(err => {
        this.errorMsg = err
        this.cancelLoading()
      })
  }
  cancelLoading() {
    this.isLoading = false
  }

  startLoading() {
    this.isLoading = true
  }

  render() {
    return (
      <div>
        {this.isLoading ? (
          <div class="text-center">
            <wu-spinner type="ring" color="#14406F" style={{ fontSize: '22px' }} />
          </div>
        ) : (
          <div innerHTML={this.documentContent} class="fade-in" />
        )}
        {this.errorMsg.length ? <div class="error">{this.errorMsg}</div> : null}
      </div>
    )
  }
}
