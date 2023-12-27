import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, share } from 'rxjs';
import { DataRangeInterface, EndPoint, WorkItemInterface } from '../../shared/interfaces';
import { error } from 'console';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpecificationsService {


  private readonly defaultRange: DataRangeInterface = {
    dataStart: new Date().getFullYear(),
    dataEnd: new Date().getFullYear(),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getEducations(): Observable<WorkItemInterface[]> {
    return this.httpClient.get<WorkItemInterface[]>(`${environment.mockUrl}/${EndPoint.educations}`);

  }

  public getWorks(): Observable<WorkItemInterface[]> {
    return this.httpClient
      .get<WorkItemInterface[]>(`${environment.mockUrl}/${EndPoint.works}`)
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
