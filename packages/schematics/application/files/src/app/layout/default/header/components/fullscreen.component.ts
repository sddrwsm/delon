import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'header-fullscreen',
  template: `
  <i nz-icon [type]="status ? 'fullscreen' : 'fullscreen-exit'"></i>
  <% if (!i18n) { %>{{ status ? '退出全屏' : '全屏' }}<% } %><% if (i18n) { %>{{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}<% } %>
  `
})
export class HeaderFullScreenComponent {
  status = false;

  @HostListener('window:resize')
  _resize() {
    this.status = screenfull.isFullscreen;
  }

  @HostListener('click')
  _click() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
