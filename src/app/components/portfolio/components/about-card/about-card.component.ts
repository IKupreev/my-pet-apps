import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {

  @Input() experience = 0;
  @Input() countWorked = 0;

}
