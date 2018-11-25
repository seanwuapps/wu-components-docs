import { Component } from '@stencil/core'
import { components } from '../../utils/component-list'
@Component({
  tag: 'component-index',
  styleUrl: 'component-index.scss'
})
export class ComponentIndex {
  render() {
    return (
      <wu-page reflect-fixed-header class="component-index-page">
        <wu-container>
          <wu-row gap="20px" fill-height equal-height="wu-card">
            {components.map(component => {
              return (
                <wu-col>
                  <wu-card hover="hover" card-title={component.name}>
                    <code>&lt;{component.key}&gt;</code>
                    <br />
                    <p>{component.description ? component.description : 'No description.'}</p>
                    <div class="text-right" slot="footer">
                      <stencil-route-link url={'/components/' + component.key}>
                        <wu-button outline flat theme="primary">
                          Details
                        </wu-button>
                      </stencil-route-link>
                    </div>
                  </wu-card>
                </wu-col>
              )
            })}
          </wu-row>
        </wu-container>
      </wu-page>
    )
  }
}
