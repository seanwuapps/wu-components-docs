import { Component } from '@stencil/core'

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

  components: Array<any> = ['wu-spinner', 'wu-button', 'wu-burger']

  render() {
    return (
      <wu-drawer-menu auto-close={true} id="menu" position="left">
        <wu-menu-header theme="secondary" img="/assets/images/cap.svg" img-shape="circle" img-href="#">
          <span slot="title">Wu Components</span>
          <span slot="sub-title">A simple set of reusable web components</span>
        </wu-menu-header>

        <wu-menu-list>
          <wu-menu-item>
            <stencil-route-link url="/">
              <i class="material-icons">home</i> Home
            </stencil-route-link>
          </wu-menu-item>
          <wu-divider />
          <wu-menu-sub-heading>Components</wu-menu-sub-heading>
          {this.components.map(component => {
            return (
              <wu-menu-item theme="primary">
                <stencil-route-link url={'/component/' + component}>{component}</stencil-route-link>
              </wu-menu-item>
            )
          })}
          <wu-menu-item theme="secondary">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Secondary
            </a>
          </wu-menu-item>
          <wu-menu-item theme="success">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Success
            </a>
          </wu-menu-item>
          <wu-menu-item theme="warning">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Warning
            </a>
          </wu-menu-item>
          <wu-menu-item theme="danger">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Danger
            </a>
          </wu-menu-item>
          <wu-menu-item theme="info">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Info
            </a>
          </wu-menu-item>
          <wu-menu-item theme="dark">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Dark
            </a>
          </wu-menu-item>
          <wu-menu-item theme="grey">
            <a href="#">
              <i class="material-icons">star_rate</i>
              Grey
            </a>
          </wu-menu-item>
        </wu-menu-list>
      </wu-drawer-menu>
    )
  }
}
