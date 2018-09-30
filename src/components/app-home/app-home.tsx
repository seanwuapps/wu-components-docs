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
        <p>It provides a good set of commonly used components that can be configured and used in web browsers.</p>
        <p>
          Getting started is as easy as:
          <code>npm install wu-components</code>
        </p>
        <stencil-route-link url="/component/">
          <wu-button>Components</wu-button>
        </stencil-route-link>
      </wu-page>
    )
  }
}
