import { Component, Prop } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
  tag: 'component-page',
  styleUrl: 'component-page.css'
})
export class ComponentPage {
  @Prop()
  match: MatchResults

  componentDidLoad() {
    document.title = this.match.params.name ? this.match.params.name + ' | Wu Components' : 'Wu Components'
  }

  render() {
    return (
      <wu-page reflect-fixed-header>
        <component-content name={this.match.params.name} />
      </wu-page>
    )
  }
}
