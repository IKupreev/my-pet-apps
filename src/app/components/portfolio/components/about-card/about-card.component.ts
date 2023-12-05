import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItemInterface } from '../../../shared/interfaces';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {

  @Input() experience: number | null = 0;
  @Input() countWorked = 0;

}
