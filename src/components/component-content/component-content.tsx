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
        if (res.status === 404) {
          console.log(404)
          throw new Error('Page not found. :(')
        }
        throw new Error('Something went wrong.')
      })
      .then(res => {
        this.documentContent = res
        this.cancelLoading()
      })
      .catch(err => {
        console.log(err)
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
        {this.errorMsg.length ? <div class="text-danger">{this.errorMsg}</div> : null}
      </div>
    )
  }
}
