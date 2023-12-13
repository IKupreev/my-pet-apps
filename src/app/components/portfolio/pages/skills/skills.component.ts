import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SkillsInterface } from '../../../shared/interfaces';
import { SkillsService } from '../../shared/skills.service';
import { ExpirienceBlockComponent } from '../../components/Expirience-Block/Expirience-Block.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ExpirienceBlockComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  frontData$!: Observable<SkillsInterface[]>;
  designData$!: Observable<SkillsInterface[]>;

  constructor(private skillsSercice: SkillsService) {}

  ngOnInit(): void {
    this.frontData$ = this.skillsSercice.getFront();
    this.designData$ = this.skillsSercice.getDesign();
  }

}
