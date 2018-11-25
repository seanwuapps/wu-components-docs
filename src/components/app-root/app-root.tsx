import { Component } from '@stencil/core'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  render() {
    return (
      <div>
        <script async defer src="https://buttons.github.io/buttons.js" />
        <wu-header fixed={true} theme="primary">
          <wu-container fluid>
            <wu-row class="f-align-center">
              <wu-col class="text-left">
                <wu-burger animation="rotate" target="#menu" />
              </wu-col>
              <wu-col class="text-center">
                <h1>
                  <stencil-route-link url="/">Wu Components</stencil-route-link>
                </h1>
              </wu-col>
              <wu-col class="text-right">
                <a
                  class="github-button"
                  href="https://github.com/seanwuapps/wu-components"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star seanwuapps/wu-components on GitHub"
                >
                  Star
                </a>
              </wu-col>
            </wu-row>
          </wu-container>
          <docs-menu />
        </wu-header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              {/* <stencil-route url="/getting-started" component="" /> */}
              <stencil-route url="/components" component="component-index" exact={true} />
              <stencil-route url="/components/:name" component="component-page" />
              <stencil-route url="/:category/:pageName" component="docs-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    )
  }
}
