import { Component } from '@stencil/core'

@Component({
  tag: 'not-found-page',
  styleUrl: 'not-found-page.css'
})
export class NotFoundPage {
  render() {
    return (
      <wu-page reflect-fixed-header>
        <h1>404</h1>
        <p>It means the page you requested was not found.</p>
        <p>
          <stencil-route-link url="/" exact={true}>
            Go to home page
          </stencil-route-link>
        </p>
      </wu-page>
    )
  }
}
