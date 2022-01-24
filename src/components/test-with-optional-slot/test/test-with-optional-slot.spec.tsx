import { newSpecPage } from '@stencil/core/testing';
import { TestWithOptionalSlot } from '../test-with-optional-slot';

describe('test-with-optional-slot', () => {

  /* OUTPUT:
    - <test-with-optional-slot use-slot="false"></test-with-optional-slot>
    + <test-with-optional-slot use-slot="false">
    + </test-with-optional-slot>
  */
  xit('should behave without slot as a component without slot - fails', async () => {
    const page = await newSpecPage({
      components: [TestWithOptionalSlot],
      html: `<test-with-optional-slot use-slot=false></test-with-optional-slot>`,
    });

    expect(page.root).toEqualHtml(`
      <test-with-optional-slot use-slot=false>
      </test-with-optional-slot>
    `);
  });

  /* OUTPUT:
    - <test-with-optional-slot use-slot="false"></test-with-optional-slot>
    + <test-with-optional-slot use-slot="false">
    +   <!---->
    + </test-with-optional-slot>    
  */
  xit('should behave without slot as a component without slot for manual comparison - fails', async () => {
    const page = await newSpecPage({
      components: [TestWithOptionalSlot],
      html: `<test-with-optional-slot use-slot=false></test-with-optional-slot>`,
    });

    expect(page.root.outerHTML).toEqualHtml(`
      <test-with-optional-slot use-slot=false>
      </test-with-optional-slot>
    `);
  });

  /* OUTPUT
    - <test-with-optional-slot use-slot="false"></test-with-optional-slot>
    + <test-with-optional-slot use-slot="false">
    +   Content
    + </test-with-optional-slot>
  */
  it("should not display content without slot - fails", async () => {
    const page = await newSpecPage({
      components: [TestWithOptionalSlot],
      supportsShadowDom: false,
      html: `<test-with-optional-slot use-slot=false></test-with-optional-slot>`,
    });

    expect(page.root).toEqualHtml(`
      <test-with-optional-slot use-slot=false>
      </test-with-optional-slot>
    `);
  });

  xit("should display content with slot - works", async () => {
    const page = await newSpecPage({
      components: [TestWithOptionalSlot],
      html: `<test-with-optional-slot use-slot="true">Content</test-with-optional-slot>`,
    });

    expect(page.root).toEqualHtml(`
      <test-with-optional-slot use-slot="true">
        Content
      </test-with-optional-slot>
    `);
  });
});
