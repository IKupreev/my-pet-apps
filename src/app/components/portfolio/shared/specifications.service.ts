import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aboutData } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SpecificationsService {

  url = 'https://638c8f9feafd555746a8fe43.mockapi.io/educations';

  constructor(
    private httpClient: HttpClient
  ) { }

  getEducations(): Observable<aboutData> {
    return this.httpClient.get<aboutData>(this.url)
  }

  getWorks() {

  }
}
