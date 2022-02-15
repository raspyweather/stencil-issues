import { newSpecPage } from '@stencil/core/testing';
import { StaticShadowStyle } from '../static-shadow-style';

describe('static-shadow-style', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StaticShadowStyle],
      html: `<static-shadow-style></static-shadow-style>`,
    });
    expect(page.root).toEqualHtml(`
      <static-shadow-style>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </static-shadow-style>
    `);
  });
});
