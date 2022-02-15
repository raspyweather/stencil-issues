import { newSpecPage } from '@stencil/core/testing';
import { TestWithSlot } from '../test-with-slot';

describe('test-with-slot', () => {
  /* OUTPUT:
      - <test-with-slot></test-with-slot>
      + <test-with-slot>
      + </test-with-slot>
  */
  it('should work as expected', async () => {
    const page = await newSpecPage({
      components: [TestWithSlot],
      html: `<test-with-slot></test-with-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <test-with-slot>
      </test-with-slot>
    `);
  });

  /* OUTPUT
    - <test-with-slot></test-with-slot>
    + <test-with-slot>
    +   <!---->
    + </test-with-slot>
  */
  it('should work with manual comparison - fails', async () => {
    const page = await newSpecPage({
      components: [TestWithSlot],
      html: `<test-with-slot></test-with-slot>`,
    });
    expect(page.root.outerHTML).toEqualHtml(`
      <test-with-slot>
      </test-with-slot>
    `);
  });

  it('should work with manual comparison workaround - works', async () => {
    const page = await newSpecPage({
      components: [TestWithSlot],
      html: `<test-with-slot></test-with-slot>`,
    });
    expect(page.root.outerHTML).toEqualHtml(`
      <test-with-slot><!---->
      </test-with-slot>
    `);
  });
});
