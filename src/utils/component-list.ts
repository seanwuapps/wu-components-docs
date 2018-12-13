interface ComponentEntry {
  key: string
  name: string
  description?: string
  keywords?: Array<string>
  tags?: Array<string>
}

export const getComponent = key => {
  return components.filter(component => component.key === key)[0]
}

export const components: Array<ComponentEntry> = [
  {
    key: 'wu-spinner',
    name: 'Spinner',
    description: 'Customisable SVG-based spinner animation'
  },
  {
    key: 'wu-button',
    name: 'Button',
    description: 'Simple but intuitive buttons'
  },
  {
    key: 'wu-burger',
    name: 'Burger',
    description: 'Burger menu trigger with animation'
  },
  {
    key: 'wu-img',
    name: 'Img',
    description: 'Progressively load image when a thumbnail source is specified.'
  },
  {
    key: 'wu-accordion',
    name: 'Accordion'
  },
  {
    key: 'wu-grid',
    name: 'Grid system',
    description: 'A flexbox-based grid system with unlimited columns and rows',
    tags: ['wu-container', 'wu-row', 'wu-col']
  },
  {
    key: 'wu-card',
    name: 'Card',
    description: 'Card layout'
  },
  {
    key: 'wu-parallax',
    name: 'Parallax',
    description: 'A web component that gives you parallax effect'
  }
]
