import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'link-test',
  styleUrl: 'link-test.css',
  shadow: false,
})
export class LinkTest {
  @Prop()
  public link: string;

  render() {
    return (
      <Host>
        <a href={this.link}>Test</a>
        <slot></slot>
      </Host>
    );
  }

}
