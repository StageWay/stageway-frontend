import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StageDetailModel } from './stage-detail-model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

APIUrl: string = "http://localhost:9000/api";

constructor(private http:HttpClient) { }

  getAllStages():Observable<StageDetailModel[]>{
    return this.http.get<StageDetailModel[]>(this.APIUrl+'/Stages');
  }

  postStage(stage:StageDetailModel): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.post(this.APIUrl + '/Stages', body,{'headers':headers});
  }

  deleteStage(stageId: number) {
    return this.http.delete(this.APIUrl + '/Stages/' + stageId);
  }

  putStage(stage: StageDetailModel) {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.put(this.APIUrl + '/Stages/' + stage.stageId, body,{'headers':headers});
  }


}
