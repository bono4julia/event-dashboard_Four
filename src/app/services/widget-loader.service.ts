import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { WidgetResponse } from '../models/widgets-response';

@Injectable()
export class WidgetsLoaderService {

  constructor(
    private http: Http
  ) { }

  getWidgets(apiUrl: string): Promise<WidgetResponse> {
    
    return this.http.get(apiUrl)
      .toPromise()
      .then((response) => { 
          return response.json() as WidgetResponse
      })
    }
  }