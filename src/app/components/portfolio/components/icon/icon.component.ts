import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
//import {IconSVG} from "./icons.svg"

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template:'<mat-icon svgIcon="{{ theName }}"></mat-icon>'
})
export class IconComponent  {
  constructor(
      matIconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons.svg`));
  }
 // template: `<svg:use attr.href="/icons.svg#{{ theIcon }}"></svg:use>`,

  @Input() theName?: string;
  //<svg:use attr.xlink:href="#{{ theIcon }}"></svg:use>
}
