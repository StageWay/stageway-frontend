import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StageDetailModel } from './stage-detail-model';


@Injectable({
  providedIn: 'root'
})
export class StageService {


constructor(private http:HttpClient) { }

  getAllStages():Observable<StageDetailModel[]>{
    return this.http.get<StageDetailModel[]>(environment.baseAPIUrl + '/Stages');
  }

  postStage(stage:StageDetailModel): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.post(environment.baseAPIUrl + '/Stages', body,{'headers':headers});
  }

  deleteStage(stageId: number) {
    return this.http.delete(environment.baseAPIUrl + '/Stages/' + stageId);
  }

  putStage(stage: StageDetailModel) {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.put(environment.baseAPIUrl + '/Stages/' + stage.stageId, body,{'headers':headers});
  }


}
