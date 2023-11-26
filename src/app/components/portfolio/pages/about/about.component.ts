import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationsService } from '../../shared/specifications.service';
import { aboutData } from '../../../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  educations$!: Observable<aboutData>;

  constructor(private specificationService: SpecificationsService) {

  }

  ngOnInit(): void {
      //this.educations$ = this.specificationService.getEducations();
  }
}
