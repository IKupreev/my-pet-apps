import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, share } from 'rxjs';
import { DataRangeInterface, WorkInterface, WorkItemInterface } from '../../shared/interfaces';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SpecificationsService {

  urlEduc = 'https://638c8f9feafd555746a8fe43.mockapi.io/educations';
  urlWork = 'https://638c8f9feafd555746a8fe43.mockapi.io/works';

  private readonly defaultRange: DataRangeInterface = {
    dataStart: new Date().getFullYear(),
    dataEnd: new Date().getFullYear(),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getExperience() {
    return this.defaultRange;
  }

  public getEducations(): Observable<WorkItemInterface[]> {
    return this.httpClient.get<WorkItemInterface[]>(this.urlEduc);

  }

  public getWorks(): Observable<WorkItemInterface[]> {
    return this.httpClient
      .get<WorkItemInterface[]>(this.urlWork)
      .pipe(share());
  }

    public getDataRange():Observable<DataRangeInterface> {
      return this.getWorks()
        .pipe(
          map(dataArr => dataArr
            .reduce((dataRange, data) => {
              dataRange.dataStart > data.dataStart && (dataRange.dataStart = data.dataStart);
              (data.dataEnd !== null && dataRange.dataEnd < data.dataEnd) && (dataRange.dataEnd = data.dataEnd);

              return dataRange;
            }, this.defaultRange),
            ),
            catchError(error => {
              console.log(error);

              return of(this.defaultRange);
            })
        )
    }

    public readonly totalExperience$ = this.getDataRange()
      .pipe(
        map(dataRange => dataRange.dataEnd - dataRange.dataStart)
      );

    public readonly countWorked$ = this.getWorks()
      .pipe(
        map(dataRange => dataRange.length)
      );
}
