/** @type { import('@storybook/react').Preview } */

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1025px',
      height: '800px',
    }

  }
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Example']
      }
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      }
    }
  }
}


export default preview;
