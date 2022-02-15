import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dynamic-shadow-style',
  styleUrl: 'dynamic-shadow-style.css',
  shadow: false,
  scoped: false
})
export class DynamicShadowStyle {

  render() {
    return (
      <Host>
        <h3>DynamicFoo</h3>
        <style>{"body{overflow-x: hidden;}"}</style>
        <slot></slot>
      </Host>
    );
  }

}
