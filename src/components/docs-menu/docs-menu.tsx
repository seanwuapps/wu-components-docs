import { Component } from '@stencil/core'
import { components } from '../../utils/component-list'
@Component({
  tag: 'docs-menu'
})
export class DocsMenu {
  menu: Array<any> = [
    {
      to: '/',
      label: 'Home',
      icon: '<i class="material-icons">home</i>'
    }
  ]

  render() {
    return (
      <wu-drawer-menu auto-close={true} id="menu" position="left">
        <wu-menu-header theme="secondary" img="/assets/images/cap.svg" img-shape="circle" img-href="#">
          <span slot="title">Wu Components</span>
          <span slot="sub-title">A simple set of reusable web components</span>
        </wu-menu-header>

        <wu-menu-list>
          <wu-menu-item theme="primary">
            <stencil-route-link url="/">
              <i class="material-icons">home</i> Home
            </stencil-route-link>
          </wu-menu-item>

          <wu-divider />

          <wu-menu-sub-heading>Components</wu-menu-sub-heading>
          {components.map(component => {
            return (
              <wu-menu-item theme="secondary">
                <stencil-route-link url={'/component/' + component.key}>
                  {component.name} &lt;
                  {component.key}
                  &gt;
                </stencil-route-link>
              </wu-menu-item>
            )
          })}

          <wu-divider />

          <wu-menu-sub-heading>Theming</wu-menu-sub-heading>
          <wu-menu-item>
            <stencil-route-link url={'/theming/themes'}>Themes</stencil-route-link>
          </wu-menu-item>
          <wu-menu-item>
            <stencil-route-link url={'/theming/css-vars'}>CSS Variables</stencil-route-link>
          </wu-menu-item>
          <wu-menu-item>
            <stencil-route-link url={'/theming/util-classes'}>Utility classes</stencil-route-link>
          </wu-menu-item>
        </wu-menu-list>
      </wu-drawer-menu>
    )
  }
}
