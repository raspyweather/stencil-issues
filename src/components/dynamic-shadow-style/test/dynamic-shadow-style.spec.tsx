import { newSpecPage } from '@stencil/core/testing';
import { DynamicHadowStyle } from '../dynamic-shadow-style';

describe('dynamic-hadow-style', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DynamicHadowStyle],
      html: `<dynamic-hadow-style></dynamic-hadow-style>`,
    });
    expect(page.root).toEqualHtml(`
      <dynamic-hadow-style>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dynamic-hadow-style>
    `);
  });
});
