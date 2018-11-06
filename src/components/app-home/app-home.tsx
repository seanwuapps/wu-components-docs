import { Component } from '@stencil/core'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  render() {
    return (
      <wu-page class="app-home" reflect-fixed-header>
        <h1>What is this</h1>
        <p>Wu Components is a set of Web components designed help developers get started easily and quickly.</p>
        <p>
          It provides a good set of commonly used components that can be configured and used in modern web browsers.
        </p>
        <stencil-route-link url="/getting-started">
          <wu-button theme="success">Getting Started</wu-button>
        </stencil-route-link>
        <stencil-route-link url="/components">
          <wu-button theme="primary">Components</wu-button>
        </stencil-route-link>
      </wu-page>
    )
  }
}
