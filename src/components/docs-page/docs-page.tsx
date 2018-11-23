import { Component, Prop, Watch, State } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
  tag: 'docs-page',
  styleUrl: 'docs-page.css'
})
export class ComponentPage {
  @Prop()
  match: MatchResults

  @State()
  pagePath: string = ''

  componentDidLoad() {
    this.updatePageContent()
  }

  @Watch('match')
  updatePageContent() {
    this.pagePath = this.match.params.category + '/' + this.match.params.pageName
    document.title = this.toTitle(this.match.params.pageName) + ' | Wu Components'
  }

  toTitle(string: string) {
    string = string.replace('-', ' ')
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    return (
      <wu-page reflect-fixed-header>
        <wu-container>
          <doc-content type="pages" name={this.pagePath} />
        </wu-container>
      </wu-page>
    )
  }
}
