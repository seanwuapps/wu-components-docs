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
        <wu-row auto-mobile fill-height>
          {components.map(component => {
            return (
              <wu-col>
                <wu-card flat hover card-title={component.name + ` <${component.key}>`} style={{ minWidth: '20%' }}>
                  <p>{component.description ? component.description : 'No description.'}</p>
                  <div class="text-right" slot="footer">
                    <stencil-route-link url={'/component/' + component.key}>
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
      </wu-page>
    )
  }
}
