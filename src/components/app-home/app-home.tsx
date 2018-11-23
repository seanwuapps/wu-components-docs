import { Component } from '@stencil/core'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  render() {
    return (
      <wu-page class="app-home" reflect-fixed-header>
        <wu-container>
          <h1>What is this</h1>
          <p>
            Wu Components is a collection of web components designed help developers get started easily and quickly.
          </p>
          <p>
            This is <strong>not</strong> designed to be another "<em>framework</em>", it should speed up your
            prototyping with minimal overheads. If you find it slowing you down, no hard feelings mate, there're plenty
            great libraries out there you can use.
          </p>
          <stencil-route-link url="/getting-started">
            <wu-button theme="success">Getting Started</wu-button>
          </stencil-route-link>
          <stencil-route-link url="/components">
            <wu-button theme="primary">Components</wu-button>
          </stencil-route-link>
        </wu-container>
      </wu-page>
    )
  }
}
