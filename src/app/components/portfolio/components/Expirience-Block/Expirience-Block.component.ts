import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillsInterface } from '../../../shared/interfaces';
import { IconComponent } from '../icon/icon.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-Expirience-Block',
  standalone: true,
  imports: [CommonModule, IconComponent, MatIconModule],
  templateUrl: './Expirience-Block.component.html',
  styleUrls: ['./Expirience-Block.component.scss']
})
export class ExpirienceBlockComponent{

  @Input() skills?: SkillsInterface;

}
