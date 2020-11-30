import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {
readonly APIUrl="http://localhost:50046/api"

constructor(private http:HttpClient) { }

getStageList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/StageData');
}

}
