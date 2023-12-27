import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint, SkillsInterface } from '../../shared/interfaces';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient: HttpClient) { }

  public getFront(): Observable<SkillsInterface[]> {
    return this.httpClient.get<SkillsInterface[]>(`${environment.mockUrl}/${EndPoint.Frontend}`);
  }
  public getDesign(): Observable<SkillsInterface[]> {
    return this.httpClient.get<SkillsInterface[]>(`${environment.mockUrl}/${EndPoint.Designer}`);
  }
}
