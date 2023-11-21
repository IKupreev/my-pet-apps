import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

  showMenu: boolean = true;
  darkModeActive: boolean = false;

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  modeToggleSwith(){
    this.darkModeActive = !this.darkModeActive;
  }

}
