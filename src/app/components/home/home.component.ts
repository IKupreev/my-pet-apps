import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { AddCardComponent } from '../add-card/add-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WeatherCardComponent, AddCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
