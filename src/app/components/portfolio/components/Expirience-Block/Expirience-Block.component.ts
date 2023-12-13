import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillsInterface } from '../../../shared/interfaces';

@Component({
  selector: 'app-Expirience-Block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Expirience-Block.component.html',
  styleUrls: ['./Expirience-Block.component.scss']
})
export class ExpirienceBlockComponent{

  @Input() skills?: SkillsInterface;

}
