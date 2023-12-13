import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsInterface } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  urlFront = 'https://638c8f9feafd555746a8fe43.mockapi.io/frontend';
  urlDes = 'https://638c8f9feafd555746a8fe43.mockapi.io/Designer';

  constructor(private httpClient: HttpClient) { }

  public getFront(): Observable<SkillsInterface[]> {
    return this.httpClient.get<SkillsInterface[]>(this.urlFront);
  }
  public getDesign(): Observable<SkillsInterface[]> {
    return this.httpClient.get<SkillsInterface[]>(this.urlDes);
  }
  // public getEducations(): Observable<WorkItemInterface[]> {
  //   return this.httpClient.get<WorkItemInterface[]>(this.urlEduc);

  // }
}
