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
        <h2>{this.loadedComponent.name}</h2>
        <p>{this.loadedComponent.description ? this.loadedComponent.description : null}</p>
        <component-content name={this.loadedComponent.key} />
      </wu-page>
    ) : (
      <p>Component cannot be loaded.</p>
    )
  }
}
