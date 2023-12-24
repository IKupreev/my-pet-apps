import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/portfolio/header/header.component';
import { SideBarComponent } from './components/portfolio/side-bar/side-bar.component';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            HeaderComponent,
            SideBarComponent,
            LayoutModule
            ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  // hideSideMenu = false;

  // constructor(public breakpointObserver: BreakpointObserver) {}

  // ngOnInit() {
  //   this.breakpointObserver.observe([
  //     Breakpoints.HandsetPortrait,
  //     Breakpoints.TabletPortrait,
  //   ])
  //   .subscribe(result => {
  //     this.hideSideMenu = false;

  //     if(result.matches) {
  //       this.hideSideMenu = true;
  //     }
  //   })

  // }
}
