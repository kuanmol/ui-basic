import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponseModel} from '../model/interface/role';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Client} from '../model/class/client';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.apiUrl + 'GetAllDesignation');
  }

  addUpdate(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.apiUrl + 'GetAllDesignation', obj);
  }

  deleteClientById(id: number): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.apiUrl + 'DeleteClientById?clientId=' + id);
  }

}