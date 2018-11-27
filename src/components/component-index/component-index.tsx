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
                    {component.tags ? (
                      component.tags.map(tag => (
                        <div>
                          <code>&lt;{tag}&gt;</code>
                        </div>
                      ))
                    ) : (
                      <code>&lt;{component.key}&gt;</code>
                    )}
                    <p>{component.description ? component.description : 'No description.'}</p>
                    <div slot="footer">
                      <stencil-route-link url={'/components/' + component.key}>Details</stencil-route-link>
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
