import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItemInterface } from '../../../shared/interfaces';

@Component({
  selector: 'app-qualification-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification-card.component.html',
  styleUrl: './qualification-card.component.scss'
})
export class QualificationCardComponent {

  @Input() card?: WorkItemInterface;

}
