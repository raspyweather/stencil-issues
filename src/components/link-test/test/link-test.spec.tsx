import { newSpecPage } from '@stencil/core/testing';
import { LinkTest } from '../link-test';

describe('link-test', () => {
  // OUTPUT:
  // Expected: "/"
  // Received: "http://testing.stenciljs.com/"
  it('expect link not to be changed', async () => {
    const page = await newSpecPage({
      components: [LinkTest],
      html: `<link-test link="/"><a href="/"></a></link-test>`,
    });
    const elements = Array.from(page.root.querySelectorAll<HTMLAnchorElement>("a"));
    console.error(elements.map(x => x.getAttribute("href")));;
    expect(elements[0].href).toBe("/");
  });
});
