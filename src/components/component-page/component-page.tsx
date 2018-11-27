import { Component, Prop, Watch, State } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import { getComponent } from '../../utils/component-list'

@Component({
  tag: 'component-page',
  styleUrl: 'component-page.css'
})
export class ComponentPage {
  @Prop()
  match: MatchResults

  @State()
  loadedComponent

  componentDidLoad() {
    this.updateTitle()
  }

  @Watch('match')
  updateTitle() {
    const item = getComponent(this.match.params.name)
    if (item) {
      this.loadedComponent = item
      document.title = item.name + ' | Wu Components'
    }
    document.title = 'Wu Components'
  }

  render() {
    return this.loadedComponent ? (
      <wu-page reflect-fixed-header>
        <wu-container>
          <doc-content type="components" name={this.loadedComponent.key} />
        </wu-container>
      </wu-page>
    ) : (
      <p>Component cannot be loaded.</p>
    )
  }
}
