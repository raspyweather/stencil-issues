import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'static-shadow-style',
  styleUrl: 'static-shadow-style.css',
  shadow: false,
  scoped: false
})
export class StaticShadowStyle {
  /** whether style is injected */
  @Prop()
  public shouldApplyStyle: boolean;

  render() {
    return (
      <Host>
        <h3>StaticFoo</h3>
        {this.shouldApplyStyle && (<style>{"body{overflow-y: hidden;}"}</style>)}
        <slot></slot>
      </Host>
    );
  }

}
