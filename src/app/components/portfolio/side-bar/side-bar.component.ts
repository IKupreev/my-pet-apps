import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent  {

  condition: boolean = false;

  toggle() {
    this.condition=!this.condition;
  }

}
