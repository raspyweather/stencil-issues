import { newSpecPage } from '@stencil/core/testing';
import { LinkTest } from '../link-test';

describe('link-test', () => {
  // OUTPUT:
  // Expected: "/"
  // Received: "http://testing.stenciljs.com/"
  it('expect link not to be changed', async () => {
    const page = await newSpecPage({
      components: [LinkTest],
      html: `<link-test link="/"></link-test>`,
    });
    const element = page.root.querySelector<HTMLAnchorElement>("a");
    expect(element.href).toBe("/");
  });
});
