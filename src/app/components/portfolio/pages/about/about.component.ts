import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationsService } from '../../shared/specifications.service';
import { DataRangeInterface, WorkItemInterface } from '../../../shared/interfaces';
import { Observable, map } from 'rxjs';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { QualificationCardComponent } from '../../components/qualification-card/qualification-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,
            AboutCardComponent,
            QualificationCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  educations$!: Observable<WorkItemInterface[]>;
  work$!: Observable<WorkItemInterface[]>;
  experience$!: Observable<number>;
  countWorked$!: Observable<number>;

  firstTab: boolean = true;

  constructor(private specificationService: SpecificationsService) {

  }

  ngOnInit(): void {
      this.educations$ = this.specificationService.getEducations();
      this.work$ = this.specificationService.getWorks();
      this.experience$ = this.specificationService.totalExperience$;
      this.countWorked$ = this.specificationService.countWorked$;
  }

  setActiveTab(active: boolean) {
    this.firstTab = active;
  }
}
