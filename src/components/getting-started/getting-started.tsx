import { Component } from '@stencil/core'

@Component({
  tag: 'getting-started',
  styleUrl: 'getting-started.css'
})
export class GettingStarted {
  render() {
    return (
      <wu-page reflect-fixed-header>
        <h1>Getting started</h1>
        <p>Insert these 2 tag into your html</p>
        <code-block
          code='
<!-- Component library -->
<link rel="stylesheet" href="https://unpkg.com/wu-components@latest/dist/wu-components.css">
<script src="https://unpkg.com/wu-components@latest/dist/wu-components.js"></script>
'
        />
        <p>and ta-da! You have all of the goodness.</p>
      </wu-page>
    )
  }
}
