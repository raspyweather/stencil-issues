import { newSpecPage } from '@stencil/core/testing';
import { TestWithoutSlot } from '../test-without-slot';

describe('test-without-slot', () => {
  xit('should works as expected - works', async () => {
    const page = await newSpecPage({
      components: [TestWithoutSlot],
      html: `<test-without-slot></test-without-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <test-without-slot></test-without-slot>
    `);
  });

  xit('should work with "manual" comparison as expected - works', async () => {
    const page = await newSpecPage({
      components: [TestWithoutSlot],
      html: `<test-without-slot></test-without-slot>`,
    });
    expect(page.root.outerHTML).toEqualHtml(`
      <test-without-slot>
        <h1>Title</h1>
        <p>Message</p>
      </test-without-slot>
    `);
  });

  it("should not render content without slot - works", async () => {
    const page = await newSpecPage({
      components: [TestWithoutSlot],
      html: `<test-without-slot>Content</test-without-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <test-without-slot>
        Content
        <h1>Title</h1>
        <p>Message</p>
      </test-without-slot>
    `);
  });
});
