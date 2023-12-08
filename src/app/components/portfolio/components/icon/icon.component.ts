import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[theIcon]',
  standalone: true,
  imports: [CommonModule],
  template: `<svg:use attr.href="/icons.svg#{{ theIcon }}"></svg:use>`,
})
export class IconComponent  {

  @Input() theIcon?: string;
  //<svg:use attr.xlink:href="#{{ theIcon }}"></svg:use>
}
